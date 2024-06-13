import { IsString, IsNumber } from 'class-validator';

export class BookDto {
  constructor(init: {
    name: string;
    pages: number;
    price: number;
    genre: string;
  }) {
    this.name = init.name;
    this.pages = init.pages;
    this.price = init.price;
    this.genre = init.genre;

    this.id = Math.floor(Math.random() * 1000);
  }
  @IsString()
  name: string;
  @IsNumber()
  pages: number;
  @IsNumber()
  price: number;
  @IsString()
  genre: string;
  @IsNumber()
  id: number;
}
