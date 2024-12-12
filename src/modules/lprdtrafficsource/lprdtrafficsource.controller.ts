import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
import { LprdTrafficSourceService } from './lprdtrafficsource.service';
import { CreateLprdTrafficSourceDto } from './dtos/create-lprdtrafficsource.dto';
import { UpdateLprdTrafficSourceDto } from './dtos/update-lprdtrafficsource.dto';
import { LprdTrafficSource } from './entities/lprdtrafficsource.entity';

@ApiTags('LprdTrafficSources')
@Controller('lprd-traffic-sources')
export class LprdTrafficSourceController {
  constructor(
    private readonly lprdTrafficSourceService: LprdTrafficSourceService,
  ) {}

  @Post()
  @ApiBody({ type: CreateLprdTrafficSourceDto })
  async create(
    @Body() createLprdTrafficSourceDto: CreateLprdTrafficSourceDto,
  ): Promise<LprdTrafficSource> {
    return this.lprdTrafficSourceService.create(createLprdTrafficSourceDto);
  }

  @Get()
  async findAll(): Promise<LprdTrafficSource[]> {
    return this.lprdTrafficSourceService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the LPRD traffic source to retrieve',
    type: Number,
    example: 1,
  })
  async findOne(@Param('id') id: number): Promise<LprdTrafficSource> {
    return this.lprdTrafficSourceService.findOne(id);
  }

  @Put(':id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the LPRD traffic source to update',
    type: Number,
    example: 1,
  })
  @ApiBody({ type: UpdateLprdTrafficSourceDto })
  async update(
    @Param('id') id: number,
    @Body() updateLprdTrafficSourceDto: UpdateLprdTrafficSourceDto,
  ): Promise<LprdTrafficSource> {
    return this.lprdTrafficSourceService.update(id, updateLprdTrafficSourceDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the LPRD traffic source to delete',
    type: Number,
    example: 1,
  })
  async remove(@Param('id') id: number): Promise<void> {
    return this.lprdTrafficSourceService.remove(id);
  }
}
