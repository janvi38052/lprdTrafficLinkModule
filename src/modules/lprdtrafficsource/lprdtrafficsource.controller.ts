import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LprdTrafficSourceService } from './lprdtrafficsource.service';
import { CreateLprdTrafficSourceDto } from './dtos/create-lprdtrafficsource.dto';
import { UpdateLprdTrafficSourceDto } from './dtos/update-lprdtrafficsource.dto';
import { LprdTrafficSource } from './entities/lprdtrafficsource.entity';

@Controller('lprd-traffic-sources')
export class LprdTrafficSourceController {
  constructor(
    private readonly lprdTrafficSourceService: LprdTrafficSourceService,
  ) {}

  @Post()
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
  async findOne(@Param('id') id: number): Promise<LprdTrafficSource> {
    return this.lprdTrafficSourceService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateLprdTrafficSourceDto: UpdateLprdTrafficSourceDto,
  ): Promise<LprdTrafficSource> {
    return this.lprdTrafficSourceService.update(id, updateLprdTrafficSourceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.lprdTrafficSourceService.remove(id);
  }
}
