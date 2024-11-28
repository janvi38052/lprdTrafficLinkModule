import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LprdTrafficWebsite } from './entities/lprd-traffic-websites.entity';
import { CreateLprdTrafficWebsiteDto } from './dtos/create-lprd-traffic-websites.dto';
import { UpdateLprdTrafficWebsiteDto } from './dtos/update-lprd-traffic-websites.dto';

@Injectable()
export class LprdTrafficWebsiteService {
  constructor(
    @InjectRepository(LprdTrafficWebsite)
    private readonly websiteRepository: Repository<LprdTrafficWebsite>,
  ) {}

  async create(data: CreateLprdTrafficWebsiteDto): Promise<LprdTrafficWebsite> {
    const website = this.websiteRepository.create(data);
    return this.websiteRepository.save(website);
  }

  async findAll(): Promise<LprdTrafficWebsite[]> {
    return this.websiteRepository.find();
  }

  async findOne(id: number): Promise<LprdTrafficWebsite> {
    return this.websiteRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateLprdTrafficWebsiteDto): Promise<LprdTrafficWebsite> {
    await this.websiteRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.websiteRepository.delete(id);
  }
}
