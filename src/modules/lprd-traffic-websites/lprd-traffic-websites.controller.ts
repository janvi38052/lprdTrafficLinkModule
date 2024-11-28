import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { LprdTrafficWebsiteService } from './lprd-traffic-websites.service';
import { CreateLprdTrafficWebsiteDto } from './dtos/create-lprd-traffic-websites.dto';
import { UpdateLprdTrafficWebsiteDto } from './dtos/update-lprd-traffic-websites.dto';

@Controller('lprd-traffic-websites')
export class LprdTrafficWebsiteController {
  constructor(private readonly websiteService: LprdTrafficWebsiteService) {}

  @Post()
  create(@Body() data: CreateLprdTrafficWebsiteDto) {
    return this.websiteService.create(data);
  }

  @Get()
  findAll() {
    return this.websiteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.websiteService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: UpdateLprdTrafficWebsiteDto) {
    return this.websiteService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.websiteService.remove(id);
  }
}
