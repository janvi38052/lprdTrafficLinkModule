import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MaxDeliveryClientService } from './max-delivery-client.service';
import { CreateMaxDeliveryClientDto } from './dtos/create-max-delivery-client.dto';
import { UpdateMaxDeliveryClientDto } from './dtos/update.max-delivery-client.dto';

@Controller('max-delivery-client')
export class MaxDeliveryClientController {
  constructor(private readonly maxDeliveryClientService: MaxDeliveryClientService) {}

  // Create a new MaxDeliveryClient
  @Post()
  async create(@Body() createDto: CreateMaxDeliveryClientDto) {
    return this.maxDeliveryClientService.create(createDto);
  }

  // Get all MaxDeliveryClients
  @Get()
  async findAll() {
    return this.maxDeliveryClientService.findAll();
  }

  // Get a single MaxDeliveryClient by ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.maxDeliveryClientService.findOne(id);
  }

  // Update MaxDeliveryClient by ID
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDto: UpdateMaxDeliveryClientDto,
  ) {
    return this.maxDeliveryClientService.update(id, updateDto);
  }

  // Delete MaxDeliveryClient by ID
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.maxDeliveryClientService.remove(id);
  }
}
