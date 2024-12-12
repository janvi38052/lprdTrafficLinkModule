import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { LprdTrafficLinksCampaignService } from './campaigns.service';
import { CreateLprdTrafficLinksCampaignDto } from './dtos/create-campaigns.dto';
import { UpdateLprdTrafficLinksCampaignDto } from './dtos/update.campaigns.dto';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@ApiTags('Lprd Traffic Links Campaigns')
@Controller('lprd-traffic-links-campaigns')
export class LprdTrafficLinksCampaignController {
  constructor(
    private readonly lprdTrafficLinksCampaignService: LprdTrafficLinksCampaignService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new campaign' })
  @ApiResponse({ status: 201, description: 'Campaign created successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  create(@Body() createDto: CreateLprdTrafficLinksCampaignDto) {
    return this.lprdTrafficLinksCampaignService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all campaigns' })
  @ApiResponse({ status: 200, description: 'List of campaigns.' })
  findAll() {
    return this.lprdTrafficLinksCampaignService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a campaign by ID' })
  @ApiParam({ name: 'id', description: 'ID of the campaign', example: 1 })
  @ApiResponse({ status: 200, description: 'Campaign retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Campaign not found.' })
  findOne(@Param('id') id: number) {
    return this.lprdTrafficLinksCampaignService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a campaign by ID' })
  @ApiParam({ name: 'id', description: 'ID of the campaign', example: 1 })
  @ApiResponse({ status: 200, description: 'Campaign updated successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @ApiResponse({ status: 404, description: 'Campaign not found.' })
  update(
    @Param('id') id: number,
    @Body() updateDto: UpdateLprdTrafficLinksCampaignDto,
  ) {
    return this.lprdTrafficLinksCampaignService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a campaign by ID' })
  @ApiParam({ name: 'id', description: 'ID of the campaign', example: 1 })
  @ApiResponse({ status: 200, description: 'Campaign deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Campaign not found.' })
  remove(@Param('id') id: number) {
    return this.lprdTrafficLinksCampaignService.remove(id);
  }
}
