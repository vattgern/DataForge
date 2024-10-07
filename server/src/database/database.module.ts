import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-8.0',
      port: 3306,
      username: 'root',
      password: '',
      database: 'data.forge',
      entities: [User],

      synchronize: true,
      migrationsRun: false,
      logging: true,
    }),
    TypeOrmModule.forFeature([]),
  ],
})
export class DatabaseModule { }
