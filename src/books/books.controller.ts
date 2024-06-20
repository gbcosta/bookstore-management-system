import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Put,
  Body,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { SearchAllBooksDto } from './dto/searchBooks.dto';
import { CreateBookDto } from './dto/createBook.dto';
import { UpdateBookDto } from './dto/updateBook.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('findAll')
  findAll(@Query() query: SearchAllBooksDto) {
    return this.booksService.findAll(query);
  }

  @Get(':id')
  async find(@Param('id') id: number) {
    return this.booksService.find(id);
  }

  @Post()
  create(@Body() createBook: CreateBookDto) {
    return this.booksService.create(createBook);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() newBook: UpdateBookDto) {
    return this.booksService.update(id, newBook);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.booksService.delete(id);
  }
}
