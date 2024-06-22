import { Injectable } from '@nestjs/common';
import { SearchAllBooksDto } from './dto/searchBooks.dto';
import { BookDto } from './dto/book.dto';
import { UpdateBookDto } from './dto/updateBook.dto';
import { Repository, DataSource, LessThanOrEqual, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.entity';

const MAX_PRICE = 2147483647;

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    private dataSource: DataSource,
  ) {}

  async findAll(query: SearchAllBooksDto) {
    try {
      const books = await this.bookRepository.findBy({
        price: LessThanOrEqual(query.price ?? MAX_PRICE),
        genre: query.genre ? query.genre : Like('%'),
        name: Like(`%${query.name}%`),
      });

      return books;
    } catch (e) {
      return e;
    }
  }

  async find(id: number) {
    try {
      const book = await this.bookRepository.findOneBy({ id });
      return book;
    } catch (e) {
      return e;
    }
  }

  async create(createBook: BookDto): Promise<Book | Error> {
    try {
      const { name, pages, price, author, language, genre } = createBook;
      const book = this.bookRepository.create({
        name,
        pages,
        price,
        author,
        language,
        genre,
      });

      await this.bookRepository.insert(book);

      return book;
    } catch (e) {
      return e;
    }
  }

  async update(id: number, newBook: UpdateBookDto): Promise<Book | Error> {
    try {
      const book = await this.bookRepository.findOneBy({ id: id });

      const updateFields = Object.fromEntries(
        Object.entries(newBook).filter(([_, value]) => {
          if (value !== undefined) {
            return value;
          }
        }),
      );

      await this.bookRepository.save({ ...updateFields, id: book.id });

      const bookResult = await this.bookRepository.findOneBy({ id: id });

      return bookResult;
    } catch (e) {
      return e;
    }
  }

  async delete(id: number) {
    try {
      await this.dataSource
        .createQueryBuilder()
        .delete()
        .from(Book)
        .where('id = :id', { id: id })
        .execute();
    } catch (e) {
      return e;
    }
  }
}
