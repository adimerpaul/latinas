import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CarouselsModule } from './carousels/carousels.module';
import * as process from "process";
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CategoriesModule } from './categories/categories.module';
import { BooksModule } from './books/books.module';
import { SalesModule } from './sales/sales.module';
import { DetailsModule } from './details/details.module';
@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
        type: process.env.DB_TYPE as any,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT as any, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: process.env.DB_SYNCHRONIZE === 'true',
      }),
      UsersModule,
      // MulterModule.register(multerOptions),
      CarouselsModule,
      ServeStaticModule.forRoot({
          rootPath: join(__dirname, '..', 'uploads'), // Ruta a la carpeta de archivos estáticos
          serveRoot: '/uploads', // Ruta base para servir los archivos estáticos
      }),
      CategoriesModule,
      BooksModule,
      SalesModule,
      DetailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
