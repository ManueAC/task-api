import { ObjectType, ID, Field } from 'type-graphql';

@ObjectType()
export class TaskType {
  @Field(() => ID)
  _id!: string;

  @Field()
  description!: string;

  @Field()
  assigned!: string;

  @Field()
  finished!: boolean;

  @Field()
  from!: string;

  @Field()
  to!: string;
}
