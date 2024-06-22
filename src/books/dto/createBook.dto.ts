import { IsString, IsInt } from 'class-validator';

export class CreateBookDto {
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
