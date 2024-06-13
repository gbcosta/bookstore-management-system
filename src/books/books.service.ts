import { Injectable } from '@nestjs/common';
import { SearchAllBooksDto } from './dto/searchBooks.dto';
import { BookDto } from './dto/book.dto';
import { CreateBookDto } from './dto/createBook.dto';
import { UpdateBookDto } from './dto/updateBook.dto';

@Injectable()
export class BooksService {
  books: BookDto[] = [];

  async findAll(query: SearchAllBooksDto): Promise<Array<BookDto>> {
    let books = [...this.books];
    if (query.name) {
      books = books.filter((book) => {
        console.log(book.name, query.name);
        if (book.name.includes(query.name)) {
          return book;
        }
      });
    }
    if (query.price) {
      books = books.filter((book) => {
        if (query.price <= book.price) {
          return book;
        }
      });
    }
    if (query.pages) {
      books = books.filter((book) => {
        if (query.pages <= book.pages) {
          return book;
        }
      });
    }
    if (query.pages) {
      books = books.filter((book) => {
        if (query.pages <= book.pages) {
          return book;
        }
      });
    }

    if (query.genre) {
      books = books.filter((book) => {
        if (query.genre == book.genre) {
          return book;
        }
      });
    }
    console.log(books);
    return books;
  }

  async find(id: number): Promise<BookDto | string> {
    const book = this.books.find((book) => {
      if (book.id == id) return book;
    });

    if (!book) return "the book don't exist";

    return book;
  }

  createBook(createBook: CreateBookDto) {
    this.books.push(new BookDto(createBook));
    return this.books;
  }

  updateBook(id: number, newBook: UpdateBookDto) {
    const book = this.books.find((book) => {
      if (book.id == id) {
        for (const attr in book) {
          if (newBook[attr]) {
            book[attr] = newBook[attr];
          }
        }
        return book;
      }
    });
    if (!book) return "the book don't exist";
    return book;
  }

  deleteBook(id: number): BookDto | string {
    let bookFinded: BookDto;
    this.books = this.books.filter((book) => {
      if (book.id != id) {
        return book;
      }
      bookFinded = book;
    });
    return bookFinded ?? "The book don't exist";
  }
}
