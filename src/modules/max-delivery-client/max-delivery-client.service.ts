import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaxDeliveryClient } from './entities/max-delivery-client.entity';
import { CreateMaxDeliveryClientDto } from './dtos/create-max-delivery-client.dto';
import { UpdateMaxDeliveryClientDto } from './dtos/update.max-delivery-client.dto';

@Injectable()
export class MaxDeliveryClientService {
  constructor(
    @InjectRepository(MaxDeliveryClient)
    private readonly maxDeliveryClientRepository: Repository<MaxDeliveryClient>,
  ) {}

  // Create new MaxDeliveryClient
  async create(data: CreateMaxDeliveryClientDto): Promise<MaxDeliveryClient> {
    const maxDeliveryClient = this.maxDeliveryClientRepository.create(data);
    return this.maxDeliveryClientRepository.save(maxDeliveryClient);
  }

  // Get all MaxDeliveryClients
  async findAll(): Promise<MaxDeliveryClient[]> {
    return this.maxDeliveryClientRepository.find();
  }

  // Get a single MaxDeliveryClient by ID
  async findOne(id: number): Promise<MaxDeliveryClient> {
    const maxDeliveryClient = await this.maxDeliveryClientRepository.findOne({ where: { id } });
    if (!maxDeliveryClient) {
      throw new NotFoundException(`MaxDeliveryClient with ID ${id} not found`);
    }
    return maxDeliveryClient;
  }

  // Update MaxDeliveryClient by ID
  async update(id: number, data: UpdateMaxDeliveryClientDto): Promise<MaxDeliveryClient> {
    await this.maxDeliveryClientRepository.update(id, data);
    return this.findOne(id);
  }

  // Delete MaxDeliveryClient by ID
  async remove(id: number): Promise<void> {
    await this.maxDeliveryClientRepository.delete(id);
  }
}
