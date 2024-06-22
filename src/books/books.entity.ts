import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  genre: string;
}
