import { Controller, Get, Post, Body, Param, Query, Put, Req } from '@nestjs/common';
import { LprdTrafficLinksService } from './lprdTrafficLinks.service';
import CreateLprdTrafficLinksDto from './dtos/create-lprd-traffic-links.dto';
import UpdateLprdTrafficLinkDto from './dtos/update-lprd-traffic-links.dto';
import { LprdTrafficLinks } from './entities/lprd-traffic-links.entity';
import { CreateLprdTrafficLinkService } from './createLprdTrafficLinks.service';
import { UpdateLprdTrafficLinkService } from './updateLprdTrafficLinks.service';
import { Request } from 'express'; // Import Request from express

@Controller('lprd-traffic-links')
export class LprdTrafficLinksController {
  constructor(
    private readonly lprdTrafficLinksService: LprdTrafficLinksService,
    private readonly createLprdTrafficLinkService: CreateLprdTrafficLinkService,
    private readonly updateLprdTrafficLinkService: UpdateLprdTrafficLinkService,
  ) {}

  // Create Traffic Link
  @Post()
  async create(
    @Body() createLprdTrafficLinkDto: CreateLprdTrafficLinksDto,
    @Req() req: Request, // Add @Req() to get the request object
  ) {
    return await this.createLprdTrafficLinkService.createTrafficLink(createLprdTrafficLinkDto, req);
  }

  // Update Traffic Link
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateLprdTrafficLinkDto: UpdateLprdTrafficLinkDto,
    @Req() req: Request, // Ensure req is passed as the third argument
  ) {
    return await this.updateLprdTrafficLinkService.updateTrafficLink(id, updateLprdTrafficLinkDto, req);
  }

  // Get all Traffic Links with pagination, sorting, and search
  @Get()
  async findAll(@Query() query: any) {
    return await this.lprdTrafficLinksService.findAll(query);
  }

  // Get a single Traffic Link by its ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.lprdTrafficLinksService.getTrafficLinkById(id);
  }
}
