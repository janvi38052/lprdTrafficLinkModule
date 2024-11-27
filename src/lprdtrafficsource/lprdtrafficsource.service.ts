import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LprdTrafficSource } from './lprdtrafficsource.entity';
import { CreateLprdTrafficSourceDto } from './create-lprdtrafficsource.dto';
import { UpdateLprdTrafficSourceDto } from './update-lprdtrafficsource.dto';

@Injectable()
export class LprdTrafficSourceService {
  constructor(
    @InjectRepository(LprdTrafficSource)
    private readonly lprdTrafficSourceRepository: Repository<LprdTrafficSource>,
  ) {}

  // Create a new LprdTrafficSource
  async create(data: CreateLprdTrafficSourceDto): Promise<LprdTrafficSource> {
    const source = this.lprdTrafficSourceRepository.create(data);
    return this.lprdTrafficSourceRepository.save(source);
  }

  // Get all LprdTrafficSources
  async findAll(): Promise<LprdTrafficSource[]> {
    return this.lprdTrafficSourceRepository.find();
  }

  // Get a single LprdTrafficSource by ID
  async findOne(id: number): Promise<LprdTrafficSource> {
    return this.lprdTrafficSourceRepository.findOne({ where: { id } });
  }

  // Update an LprdTrafficSource by ID
  async update(id: number, data: UpdateLprdTrafficSourceDto): Promise<LprdTrafficSource> {
    await this.lprdTrafficSourceRepository.update(id, data);
    return this.findOne(id);
  }

  // Delete an LprdTrafficSource by ID
  async remove(id: number): Promise<void> {
    await this.lprdTrafficSourceRepository.delete(id);
  }
}
