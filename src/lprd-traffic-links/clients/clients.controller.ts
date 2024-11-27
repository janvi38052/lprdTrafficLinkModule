import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LprdTrafficLinksClientService } from './clients.service';
import { CreateLprdTrafficLinksClientDto } from './create-clients.dto';
import { UpdateLprdTrafficLinksClientDto } from './update-clients.dto';

@Controller('clients')
export class LprdTrafficLinksClientController {
  constructor(private readonly clientService: LprdTrafficLinksClientService) {}

  @Post()
  create(@Body() createDto: CreateLprdTrafficLinksClientDto) {
    return this.clientService.create(createDto);
  }

  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.clientService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDto: UpdateLprdTrafficLinksClientDto) {
    return this.clientService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.clientService.remove(id);
  }
}
