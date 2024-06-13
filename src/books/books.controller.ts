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
import { BookDto } from './dto/book.dto';

@Controller('books')
export class BooksController {
  books: BookDto[] = [];
  constructor(private readonly booksService: BooksService) {}

  @Get('findAll')
  async findAll(@Query() query: SearchAllBooksDto): Promise<Array<BookDto>> {
    return this.booksService.findAll(query);
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<BookDto | string> {
    return this.booksService.find(id);
  }

  @Post()
  createBook(@Body() createBook: CreateBookDto) {
    return this.booksService.createBook(createBook);
  }

  @Put(':id')
  updateBook(@Param('id') id: number, @Body() newBook: UpdateBookDto) {
    return this.booksService.updateBook(id, newBook);
  }
  @Delete(':id')
  deleteBook(@Param('id') id: number): BookDto | string {
    return this.booksService.deleteBook(id);
  }
}
