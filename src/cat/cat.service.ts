import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { CreateCatDto } from './dto/create-cat.dto';

import { Cat } from './entities/cat.entity';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  create(createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsRepository.save(createCatDto);
  }

  findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  findOne(id: number): Promise<Cat> {
    return this.catsRepository.findOneBy({ id });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.catsRepository.delete(id);
  }
}
