import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MaxDeliveryClientService } from './max-delivery-client.service';
import { CreateMaxDeliveryClientDto } from './dtos/create-max-delivery-client.dto';
import { UpdateMaxDeliveryClientDto } from './dtos/update.max-delivery-client.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('max-delivery-client')
@Controller('max-delivery-client')
export class MaxDeliveryClientController {
  constructor(private readonly maxDeliveryClientService: MaxDeliveryClientService) {}

  @Post()
  @ApiOperation({summary:'Create new max-delivery-client '})
  @ApiResponse({status:200,description:'create max-delivery-client sucessfully'})
  @ApiResponse({status:400,description:'Invalid input'})
  async create(@Body() createDto: CreateMaxDeliveryClientDto) {
    return this.maxDeliveryClientService.create(createDto);
  }

  @Get()
  @ApiOperation({summary:'Get all max-delivery-client'})
  @ApiResponse({status:200,description:'get all max-deivery-client sucessfully'})
  @ApiResponse({status:400,description:'not able to fetched '})
  async findAll() {
    return this.maxDeliveryClientService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary:'Get ID of max-delivery-client'})
  @ApiResponse({status:200,description:'get ID for max-delivery-client sucessfully'})
  @ApiResponse({status:400,description:'not able to fetched ID '})
  async findOne(@Param('id') id: number) {
    return this.maxDeliveryClientService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({summary:'Update max-delivery-client'})
  @ApiResponse({status:200,description:'update max-deliver-client sucessfully'})
  @ApiResponse({status:400,description:'somethign wrong '})
  async update(
    @Param('id') id: number,
    @Body() updateDto: UpdateMaxDeliveryClientDto,
  ) {
    return this.maxDeliveryClientService.update(id, updateDto);
  }




  @Delete(':id')
  @ApiOperation({summary:'Get all max-delivery-client'})
  @ApiResponse({status:200,description:'get all user sucessfully'})
  @ApiResponse({status:400,description:'not able to fetched '})
  async remove(@Param('id') id: number) {
    return this.maxDeliveryClientService.remove(id);
  }
}
