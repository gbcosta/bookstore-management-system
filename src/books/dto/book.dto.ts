import { IsString, IsInt } from 'class-validator';

export class BookDto {
  @IsString()
  name: string;

  @IsInt()
  pages: number;

  @IsInt()
  price: number;

  @IsString()
  genre: string;

  @IsString()
  author: string;

  @IsString()
  language: string;
}
