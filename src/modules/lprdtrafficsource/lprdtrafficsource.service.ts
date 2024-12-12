import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LprdTrafficSource } from './entities/lprdtrafficsource.entity';
import { CreateLprdTrafficSourceDto } from './dtos/create-lprdtrafficsource.dto';
import { UpdateLprdTrafficSourceDto } from './dtos/update-lprdtrafficsource.dto';

@Injectable()
export class LprdTrafficSourceService {
  constructor(
    @InjectRepository(LprdTrafficSource)
    private readonly lprdTrafficSourceRepository: Repository<LprdTrafficSource>,
  ) {}

  async create(data: CreateLprdTrafficSourceDto): Promise<LprdTrafficSource> {
    const source = this.lprdTrafficSourceRepository.create(data);
    return this.lprdTrafficSourceRepository.save(source);
  }

  async findAll(): Promise<LprdTrafficSource[]> {
    return this.lprdTrafficSourceRepository.find();
  }

  async findOne(id: number): Promise<LprdTrafficSource> {
    return this.lprdTrafficSourceRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateLprdTrafficSourceDto): Promise<LprdTrafficSource> {
    await this.lprdTrafficSourceRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.lprdTrafficSourceRepository.delete(id);
  }

  async getTrafficSourceById(id: number): Promise<LprdTrafficSource> {
    return this.findOne(id); 
  }
}
