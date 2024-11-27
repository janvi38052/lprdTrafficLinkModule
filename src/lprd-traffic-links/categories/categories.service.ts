import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LprdTrafficLinksCategory } from './categories.entity';
import { CreateLprdTrafficLinksCategoryDto } from './create-category.dto';
import { UpdateLprdTrafficLinksCategoryDto } from './update-category.dto';

@Injectable()
export class LprdTrafficLinksCategoryService { 
  constructor(
    @InjectRepository(LprdTrafficLinksCategory)
    private readonly lprdTrafficLinksCategoryRepository: Repository<LprdTrafficLinksCategory>,
  ) {}

  async create(data: CreateLprdTrafficLinksCategoryDto): Promise<LprdTrafficLinksCategory> {
    const category = this.lprdTrafficLinksCategoryRepository.create(data);
    return this.lprdTrafficLinksCategoryRepository.save(category);
  }

  async findAll(): Promise<LprdTrafficLinksCategory[]> {
    return this.lprdTrafficLinksCategoryRepository.find();
  }
  async findOne(id: number): Promise<LprdTrafficLinksCategory> {
    return this.lprdTrafficLinksCategoryRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateLprdTrafficLinksCategoryDto): Promise<LprdTrafficLinksCategory> {
    await this.lprdTrafficLinksCategoryRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.lprdTrafficLinksCategoryRepository.delete(id);
  }
}
