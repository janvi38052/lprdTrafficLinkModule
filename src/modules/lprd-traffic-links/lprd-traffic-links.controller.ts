import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common'; // Import Query for pagination and sorting
import { LprdTrafficLinksService } from './lprd-traffic-links.service';
import { CreateLprdTrafficLinksDto } from './dtos/create-lprd-traffic-links.dto';
import { UpdateLprdTrafficLinksDto } from './dtos/update-lprd-traffic-links.dto';

@Controller('lprd-traffic-links')
export class LprdTrafficLinksController {
  constructor(private readonly lprdTrafficLinksService: LprdTrafficLinksService) {}

  // Create a new Traffic Link
  @Post()
  async create(@Body() createLprdTrafficLinksDto: CreateLprdTrafficLinksDto) {
    return this.lprdTrafficLinksService.create(createLprdTrafficLinksDto);
  }

  // Get all Traffic Links with pagination, searching, and sorting
  @Get()
  async findAll(
    @Query('page') page: number = 1,       // Pagination: Default to page 1
    @Query('limit') limit: number = 10,     // Pagination: Default to 10 items per page
    @Query('search') searchQuery: string = '', // Searching: Query parameter for search
    @Query('sortBy') sortBy: string = 'tag',  // Sorting: Default sorting by 'tag'
    @Query('order') order: 'ASC' | 'DESC' = 'ASC' // Sorting: Default order ASC
  ) {
    return this.lprdTrafficLinksService.findAll(page, limit, searchQuery, sortBy, order);
  }

  // Get a single Traffic Link by ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.lprdTrafficLinksService.findOne(id);
  }

  // Update a Traffic Link by ID
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateLprdTrafficLinksDto: UpdateLprdTrafficLinksDto
  ) {
    return this.lprdTrafficLinksService.update(id, updateLprdTrafficLinksDto);
  }

  // Delete a Traffic Link by ID
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.lprdTrafficLinksService.remove(id);
  }
}
