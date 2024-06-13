import { Module } from '@nestjs/common';
import { BooksController } from './books/books.controller';
import { BooksModule } from './books/books.module';
import { BooksService } from './books/books.service';
@Module({
  imports: [BooksModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
