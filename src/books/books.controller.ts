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
import { BookDto } from './dto/book.dto';
import { UpdateBookDto } from './dto/updateBook.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('findAll')
  async findAll(@Query() query: SearchAllBooksDto) {
    return await this.booksService.findAll(query);
  }

  @Get(':id')
  async find(@Param('id') id: number) {
    return await this.booksService.find(id);
  }

  @Post()
  async create(@Body() book: BookDto) {
    return await this.booksService.create(book);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() newBook: UpdateBookDto) {
    return await this.booksService.update(id, newBook);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.booksService.delete(id);
  }
}
