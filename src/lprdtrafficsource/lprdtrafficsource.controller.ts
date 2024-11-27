import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LprdTrafficSourceService } from './lprdtrafficsource.service';
import { CreateLprdTrafficSourceDto } from './create-lprdtrafficsource.dto';
import { UpdateLprdTrafficSourceDto } from './update-lprdtrafficsource.dto';
import { LprdTrafficSource } from './lprdtrafficsource.entity';

@Controller('lprd-traffic-sources')
export class LprdTrafficSourceController {
  constructor(
    private readonly lprdTrafficSourceService: LprdTrafficSourceService,
  ) {}

  // Create a new LprdTrafficSource
  @Post()
  async create(
    @Body() createLprdTrafficSourceDto: CreateLprdTrafficSourceDto,
  ): Promise<LprdTrafficSource> {
    return this.lprdTrafficSourceService.create(createLprdTrafficSourceDto);
  }

  // Get all LprdTrafficSources
  @Get()
  async findAll(): Promise<LprdTrafficSource[]> {
    return this.lprdTrafficSourceService.findAll();
  }

  // Get a single LprdTrafficSource by ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<LprdTrafficSource> {
    return this.lprdTrafficSourceService.findOne(id);
  }

  // Update an LprdTrafficSource by ID
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateLprdTrafficSourceDto: UpdateLprdTrafficSourceDto,
  ): Promise<LprdTrafficSource> {
    return this.lprdTrafficSourceService.update(id, updateLprdTrafficSourceDto);
  }

  // Delete an LprdTrafficSource by ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.lprdTrafficSourceService.remove(id);
  }
}
