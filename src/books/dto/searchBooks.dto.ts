import { IsString, IsInt, ValidateIf } from 'class-validator';

export class SearchAllBooksDto {
  @ValidateIf((value) => value.otherProperty !== undefined)
  @IsInt()
  price?: number;

  @IsString()
  name?: string;

  @ValidateIf((value) => value.otherProperty !== undefined)
  @IsString()
  genre?: string;
}
