import { Injectable } from '@nestjs/common';
import { SearchAllBooksDto } from './dto/searchBooks.dto';
import { BookDto } from './dto/book.dto';
import { CreateBookDto } from './dto/createBook.dto';
import { UpdateBookDto } from './dto/updateBook.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}
  findAll(query: SearchAllBooksDto) {}

  find(id: number) {}

  async create(createBook: CreateBookDto) {
    const book = this.bookRepository.create({
      name: 'Lord Of The Rings',
      pages: 1000,
      price: 30,
      author: 'Tolkien',
      language: 'english',
    });

    if (!book) return;

    try {
      await this.bookRepository.insert(book);
    } catch (e) {
      console.log(e);
      return;
    }

    console.log('finalizou');
  }

  update(id: number, newBook: UpdateBookDto) {}

  delete(id: number) {}
}
