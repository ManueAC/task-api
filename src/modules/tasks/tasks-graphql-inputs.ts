import { InputType, Field } from 'type-graphql';

@InputType()
export class TaskInput {
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
