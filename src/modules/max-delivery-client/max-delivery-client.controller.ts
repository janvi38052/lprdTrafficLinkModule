import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MaxDeliveryClientService } from './max-delivery-client.service';
import { CreateMaxDeliveryClientDto } from './dtos/create-max-delivery-client.dto';
import { UpdateMaxDeliveryClientDto } from './dtos/update.max-delivery-client.dto';

@Controller('max-delivery-client')
export class MaxDeliveryClientController {
  constructor(private readonly maxDeliveryClientService: MaxDeliveryClientService) {}

  @Post()
  async create(@Body() createDto: CreateMaxDeliveryClientDto) {
    return this.maxDeliveryClientService.create(createDto);
  }

  @Get()
  async findAll() {
    return this.maxDeliveryClientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.maxDeliveryClientService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDto: UpdateMaxDeliveryClientDto,
  ) {
    return this.maxDeliveryClientService.update(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.maxDeliveryClientService.remove(id);
  }
}
