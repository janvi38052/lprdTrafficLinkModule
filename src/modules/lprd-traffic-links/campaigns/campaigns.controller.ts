import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { LprdTrafficLinksCampaignService } from './campaigns.service';
import { CreateLprdTrafficLinksCampaignDto } from './dtos/create-campaigns.dto';
import { UpdateLprdTrafficLinksCampaignDto } from './dtos/update.campaigns.dto';

@Controller('lprd-traffic-links-campaigns')
export class LprdTrafficLinksCampaignController {
  constructor(
    private readonly lprdTrafficLinksCampaignService: LprdTrafficLinksCampaignService,
  ) {}

  @Post()
  create(@Body() createDto: CreateLprdTrafficLinksCampaignDto) {
    return this.lprdTrafficLinksCampaignService.create(createDto);
  }

  @Get()
  findAll() {
    return this.lprdTrafficLinksCampaignService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.lprdTrafficLinksCampaignService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateDto: UpdateLprdTrafficLinksCampaignDto) {
    return this.lprdTrafficLinksCampaignService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.lprdTrafficLinksCampaignService.remove(id);
  }
}
