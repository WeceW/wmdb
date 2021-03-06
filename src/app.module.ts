import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './movie/movie.module';
import { PersonModule } from './person/person.module';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [TypeOrmModule.forRoot(), MovieModule, PersonModule, GenreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
