import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-8.0',
      port: 3306,
      username: 'root',
      password: '',
      database: 'data.forge',
      synchronize: true,
      entities: [],
    }),
    TypeOrmModule.forFeature([]),
  ],
})
export class DatabaseModule {}
