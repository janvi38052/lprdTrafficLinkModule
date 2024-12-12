import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaxDeliveryCampaignService } from './max-delivery-campaign.service';
import { CreateMaxDeliveryCampaignDto } from './dtos/create.max-delivery-campaign.dto';
import { UpdateMaxDeliveryCampaignDto } from './dtos/update.max-delivery-campaign.dto';
import { ApiOperation, ApiPropertyOptional, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('max-delivery-campaign')
@Controller('max-delivery-campaign')
export class MaxDeliveryCampaignController {
  constructor(private readonly campaignService: MaxDeliveryCampaignService) {}

  @Post()
  @ApiOperation({summary:'Created max-delivery-campaign'})
  @ApiResponse({status:200,description:'created max-delivery-campaign successfully'})
  @ApiResponse({status:400,description:'Invalid Input'})
  create(@Body() createDto: CreateMaxDeliveryCampaignDto) {
    return this.campaignService.create(createDto);
  }

  @Get()
  @ApiOperation({summary:'Get All max-delivery-campaign'})
  @ApiResponse({status:200,description:'Fetch all max-delivery-campaign successfully'})
  @ApiResponse({status:400,description:'Invalid Input'})
  findAll() {
    return this.campaignService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary:'Get ID of max-delivery-campaign'})
  @ApiResponse({status:200,description:'Get ID max-delivery-campaign successfully'})
  @ApiResponse({status:400,description:'Invalid Input'})
  findOne(@Param('id') id: number) {
    return this.campaignService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({summary:'Update max-delivery-campaign'})
  @ApiResponse({status:200,description:'Updated max-delivery-campaign successfully'})
  @ApiResponse({status:400,description:'Invalid Input'})
  update(@Param('id') id: number, @Body() updateDto: UpdateMaxDeliveryCampaignDto) {
    return this.campaignService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({summary:'Deleted max-delivery-campaign'})
  @ApiResponse({status:200,description:'deleted max-delivery-campaign successfully'})
  @ApiResponse({status:400,description:'Invalid Input'})
  remove(@Param('id') id: number) {
    return this.campaignService.remove(id);
  }
}
