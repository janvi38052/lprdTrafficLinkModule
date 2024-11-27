import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { LprdTrafficLinksService } from './lprd-traffic-links.service';
import { CreateLprdTrafficLinksDto } from './create-lprd-traffic-links.dto';
import { UpdateLprdTrafficLinksDto } from './update-lprd-traffic-links.dto';

@Controller('lprd-traffic-links')
export class LprdTrafficLinksController {
  constructor(private readonly service: LprdTrafficLinksService) {}

  @Post()
  create(@Body() data: CreateLprdTrafficLinksDto) {
    return this.service.create(data);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: UpdateLprdTrafficLinksDto) {
    return this.service.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(+id);
  }
}
