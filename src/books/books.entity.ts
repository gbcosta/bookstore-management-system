import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  price: number;

  @Column()
  pages: number;

  @Column()
  language: string;
}
