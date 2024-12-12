import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
import { LprdTrafficWebsiteService } from './lprd-traffic-websites.service';
import { CreateLprdTrafficWebsiteDto } from './dtos/create-lprd-traffic-websites.dto';
import { UpdateLprdTrafficWebsiteDto } from './dtos/update-lprd-traffic-websites.dto';

@ApiTags('LprdTrafficWebsites') 
@Controller('lprd-traffic-websites')
export class LprdTrafficWebsiteController {
  constructor(private readonly websiteService: LprdTrafficWebsiteService) {}

  @Post()
  @ApiBody({ type: CreateLprdTrafficWebsiteDto })
  create(@Body() data: CreateLprdTrafficWebsiteDto) {
    return this.websiteService.create(data);
  }

  @Get()
  findAll() {
    return this.websiteService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the LPRD traffic website to retrieve',
    type: Number,
    example: 1,
  })
  findOne(@Param('id') id: number) {
    return this.websiteService.findOne(id);
  }

  @Put(':id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the LPRD traffic website to update',
    type: Number,
    example: 1,
  })
  @ApiBody({ type: UpdateLprdTrafficWebsiteDto })
  update(@Param('id') id: number, @Body() data: UpdateLprdTrafficWebsiteDto) {
    return this.websiteService.update(id, data);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the LPRD traffic website to delete',
    type: Number,
    example: 1,
  })
  remove(@Param('id') id: number) {
    return this.websiteService.remove(id);
  }
}
