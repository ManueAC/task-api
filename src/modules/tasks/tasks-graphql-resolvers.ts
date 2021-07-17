import { Query, Mutation, Resolver, Arg } from 'type-graphql';
import { TaskDoc, TasksCollection } from './task-model';
import { TaskInput } from './tasks-graphql-inputs';
import { ApolloError } from 'apollo-server-express';
import { TaskType } from './tasks-graphql-types';

@Resolver()
export class TaskResolver {
  @Query(() => [TaskType])
  async getTasks(): Promise<TaskDoc[]> {
    try {
      return await TasksCollection.find();
    } catch (err) {
      throw new ApolloError(err);
    }
  }

  @Query(() => TaskType)
  async getTask(@Arg('id') id: string): Promise<TaskDoc | { message: string }> {
    try {
      const task = await TasksCollection.findById(id);
      if (!task) throw new ApolloError('task does not exist or was deleted');
      return task;
    } catch (err) {
      throw new ApolloError(err);
    }
  }

  @Mutation(() => TaskType)
  async createTask(@Arg('input') input: TaskInput): Promise<TaskDoc> {
    try {
      const newTask = new TasksCollection(input);
      await newTask.save();
      return newTask;
    } catch (err) {
      throw new ApolloError(err);
    }
  }

  @Mutation(() => TaskType)
  async deleteTask(
    @Arg('id') id: string,
  ): Promise<TaskDoc | { message: string }> {
    try {
      const task = await TasksCollection.findById(id);
      if (!task) throw new ApolloError('task does not exist or was deleted');

      await task.remove();
      return task;
    } catch (err) {
      throw new ApolloError(err);
    }
  }

  @Mutation(() => TaskType)
  async updateTask(
    @Arg('input') input: TaskInput,
    @Arg('id') id: string,
  ): Promise<TaskDoc | { message: string }> {
    try {
      const taskUpdated = await TasksCollection.findById(id);
      if (!taskUpdated)
        throw new ApolloError('task does not exist or was deleted');

      await taskUpdated.updateOne(input);
      return taskUpdated;
    } catch (err) {
      throw new ApolloError(err);
    }
  }
}
