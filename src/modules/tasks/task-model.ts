import { Document, Model, Schema, model } from 'mongoose';

export interface Task {
  description: string;
  assigned: string;
  finished: boolean;
  from: string;
  to: string;
}

export interface TaskDoc extends Task, Document {}

export type TaskModel = Model<TaskDoc>;

const taskSchema = new Schema(
  {
    description: {
      type: String,
      required: 'field is required',
    },
    assigned: {
      type: String,
      required: 'field is required',
    },
    finished: {
      type: Boolean,
      required: 'field is required',
    },
    from: {
      type: String,
      required: 'field is required',
    },
    to: {
      type: String,
      required: 'field is required',
    },
  },
  {
    timestamps: true,
  },
);

export const TasksCollection = model<TaskDoc, TaskModel>('tasks', taskSchema);
