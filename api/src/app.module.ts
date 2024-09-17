import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikeModule, Like } from './like';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'cat-pinterest-api-pg',
      port: 5432,
      username: 'postgres',
      password: '1',
      database: 'support_lk_db',
      entities: [Like],
      synchronize: true,
    }),
    LikeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
