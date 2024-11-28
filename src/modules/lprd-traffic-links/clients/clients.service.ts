import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LprdTrafficLinksClient } from './entities/clients.entity';
import { CreateLprdTrafficLinksClientDto } from './dtos/create-clients.dto';
import { UpdateLprdTrafficLinksClientDto } from './dtos/update-clients.dto';

@Injectable()
export class LprdTrafficLinksClientService {
  constructor(
    @InjectRepository(LprdTrafficLinksClient)
    private readonly clientRepository: Repository<LprdTrafficLinksClient>,
  ) {}

  async create(data: CreateLprdTrafficLinksClientDto): Promise<LprdTrafficLinksClient> {
    const client = this.clientRepository.create(data);
    return this.clientRepository.save(client);
  }

  async findAll(): Promise<LprdTrafficLinksClient[]> {
    return this.clientRepository.find();
  }

  async findOne(id: number): Promise<LprdTrafficLinksClient> {
    return this.clientRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateLprdTrafficLinksClientDto): Promise<LprdTrafficLinksClient> {
    await this.clientRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.clientRepository.delete(id);
  }
}
