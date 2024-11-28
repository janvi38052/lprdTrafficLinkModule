import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaxDeliveryCampaignService } from './max-delivery-campaign.service';
import { CreateMaxDeliveryCampaignDto } from './dtos/create.max-delivery-campaign.dto';
import { UpdateMaxDeliveryCampaignDto } from './dtos/update.max-delivery-campaign.dto';

@Controller('max-delivery-campaign')
export class MaxDeliveryCampaignController {
  constructor(private readonly campaignService: MaxDeliveryCampaignService) {}

  @Post()
  create(@Body() createDto: CreateMaxDeliveryCampaignDto) {
    return this.campaignService.create(createDto);
  }

  @Get()
  findAll() {
    return this.campaignService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.campaignService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateDto: UpdateMaxDeliveryCampaignDto) {
    return this.campaignService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.campaignService.remove(id);
  }
}
