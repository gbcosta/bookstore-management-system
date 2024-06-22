import { IsString, IsInt, ValidateIf } from 'class-validator';

export class UpdateBookDto {
  @ValidateIf((value) => value.otherProperty !== undefined)
  @IsString()
  name?: string;

  @ValidateIf((value) => value.otherProperty !== undefined)
  @IsInt()
  pages?: number;

  @ValidateIf((value) => value.otherProperty !== undefined)
  @IsInt()
  price?: number;

  @ValidateIf((value) => value.otherProperty !== undefined)
  @IsString()
  genre?: string;

  @ValidateIf((value) => value.otherProperty !== undefined)
  @IsString()
  author?: string;

  @ValidateIf((value) => value.otherProperty !== undefined)
  @IsString()
  language?: string;
}
