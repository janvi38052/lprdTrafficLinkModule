import { Controller, Get, Post, Body, Param, Query, Put, Req, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery, ApiBody } from '@nestjs/swagger';
import { LprdTrafficLinksService } from './lprdTrafficLinks.service';
import CreateLprdTrafficLinksDto from './dtos/create-lprd-traffic-links.dto';
import UpdateLprdTrafficLinkDto from './dtos/update-lprd-traffic-links.dto';
import { LprdTrafficLinks } from './entities/lprd-traffic-links.entity';
import { CreateLprdTrafficLinkService } from './createLprdTrafficLinks.service';
import { UpdateLprdTrafficLinkService } from './updateLprdTrafficLinks.service';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';


@ApiTags('LPRD Traffic Links')
@Controller('lprd-traffic-links')


export class LprdTrafficLinksController {
  constructor(
    private readonly lprdTrafficLinksService: LprdTrafficLinksService,
    private readonly createLprdTrafficLinkService: CreateLprdTrafficLinkService,
    private readonly updateLprdTrafficLinkService: UpdateLprdTrafficLinkService,
  ) {}

  @ApiOperation({ summary: 'Create a new traffic link' })
  @ApiBody({ type: CreateLprdTrafficLinksDto, description: 'Details of the traffic link to create' })
  @ApiResponse({ status: 201, description: 'Traffic link created successfully.' })
  @ApiResponse({ status: 400, description: 'Validation errors.' })
   @UseGuards(AuthGuard)
  @Post()
  async create(
    @Body() createLprdTrafficLinkDto: CreateLprdTrafficLinksDto,
    @Req() req: Request, 
  ) {
    return await this.createLprdTrafficLinkService.createTrafficLink(createLprdTrafficLinkDto, req);
  }

  @ApiOperation({ summary: 'Update an existing traffic link' })
  @ApiParam({ name: 'id', type: Number, description: 'ID of the traffic link to update' })
  @ApiBody({ type: UpdateLprdTrafficLinkDto, description: 'Details of the traffic link to update' })
  @ApiResponse({ status: 200, description: 'Traffic link updated successfully.' })
  @ApiResponse({ status: 404, description: 'Traffic link not found.' })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateLprdTrafficLinkDto: UpdateLprdTrafficLinkDto,
    @Req() req: Request, 
  ) {
    return await this.updateLprdTrafficLinkService.updateTrafficLink(id, updateLprdTrafficLinkDto, req);
  }

  @ApiOperation({ summary: 'Retrieve all traffic links' })
  @ApiQuery({ name: 'query', required: false, description: 'Optional query parameters for filtering or pagination' })
  @ApiResponse({ status: 200, description: 'List of all traffic links retrieved successfully.' })
  @Get()
  async findAll(@Query() query: any) {
    return await this.lprdTrafficLinksService.findAll(query);
  }

  @ApiOperation({ summary: 'Retrieve a specific traffic link' })
  @ApiParam({ name: 'id', type: Number, description: 'ID of the traffic link to retrieve' })
  @ApiResponse({ status: 200, description: 'Traffic link retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Traffic link not found.' })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.lprdTrafficLinksService.getTrafficLinkById(id);
  }
}
