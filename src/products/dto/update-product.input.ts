import { Field, Float, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class UpdateProductInput {
    @Field()
    @IsNotEmpty()
    id: number;

    @Field()
    @IsNotEmpty()
    name: string;

    @Field({nullable: true})
    producer: string;

    @Field(type => Int)
    @IsNotEmpty()
    amount: number;
  
    @Field(type => Float)
    @IsNotEmpty()
    price: number;
}