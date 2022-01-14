import { Field, InputType } from '@nestjs/graphql';
import { MaxLength, Min, MinLength } from 'class-validator';

@InputType()
export class CreateReviewInput {
  @Field(() => String)
  @MinLength(1, {
    message: 'contents is too short',
  })
  @MaxLength(23, {
    message: 'contents is too long',
  })
  contents: string;

  @Field(() => Date)
  @Min(1)
  startedAt: number;

  @Field(() => Date)
  @Min(1)
  finishedAt: number;
}