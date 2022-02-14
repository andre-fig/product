import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn()
  @Field (type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({nullable: true})
  @Field({nullable: true})
  producer: string;

  @Column()
  @Field(type => Int)
  amount: number;

  @Column()
  @Field(type => Float)
  price: number;
}
