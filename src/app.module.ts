import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatModule } from './cat/cat.module';
import { Cat } from './cat/entities/cat.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'aluno',
      password: 'aluno',
      database: 'gatolandia',
      entities: [Cat],
      synchronize: true,
    }),
    CatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
