import { Module } from '@nestjs/common';
import { BooksController } from './books/books.controller';
import { BooksModule } from './books/books.module';
import { BooksService } from './books/books.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/books.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: Number(process.env.PORT),
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [Book],
      synchronize: true,
    }),
    BooksModule,
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {
  constructor() {}
}
