import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { LprdTrafficLinkCategoriesService } from './categories.service';
import { LprdTrafficLinksCategory } from './entities/categories.entity';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('LPRD Traffic Link Categories')
@Controller('lprd-traffic-link-categories')
export class LprdTrafficLinkCategoriesController {
  constructor(
    private readonly lprdTrafficLinkCategoriesService: LprdTrafficLinkCategoriesService,
    @InjectEntityManager() private readonly entityManager: EntityManager,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all traffic link categories' })
  @ApiResponse({
    status: 200,
    description: 'List of all traffic link categories',
    type: [LprdTrafficLinksCategory],
  })
  async getAllCategories(): Promise<LprdTrafficLinksCategory[]> {
    return this.lprdTrafficLinkCategoriesService.getAllCategories();
  }

  @Post()
  @ApiOperation({ summary: 'Create new traffic link categories' })
  @ApiBody({
    description: 'Array of traffic link categories to create',
    type: [LprdTrafficLinksCategory],
  })
  @ApiResponse({
    status: 201,
    description: 'Traffic Link Categories created successfully',
  })
  async create(@Body() categories: Partial<LprdTrafficLinksCategory>[]) {
    await this.lprdTrafficLinkCategoriesService.createLprdTrafficLinkCategory(
      categories,
      this.entityManager,
    );
    return { message: 'Traffic Link Categories created successfully' };
  }

  @Delete(':trafficLinkId')
  @ApiOperation({
    summary: 'Delete traffic link categories by their IDs',
  })
  @ApiParam({
    name: 'trafficLinkId',
    description: 'ID of the traffic link',
    example: 1,
  })
  @ApiBody({
    description: 'Array of category IDs to delete',
    type: [Number],
  })
  @ApiResponse({
    status: 200,
    description: 'Traffic Link Categories deleted successfully',
  })
  async deleteCategories(
    @Param('trafficLinkId') trafficLinkId: number,
    @Body() categoryIds: number[],
  ) {
    await this.lprdTrafficLinkCategoriesService.deleteLprdTrafficLinkCategory(
      categoryIds,
      trafficLinkId,
      this.entityManager,
    );
    return { message: 'Traffic Link Categories deleted successfully' };
  }

  @Delete('by-traffic-link/:trafficLinkId')
  @ApiOperation({
    summary: 'Delete all traffic link categories by Traffic Link ID',
  })
  @ApiParam({
    name: 'trafficLinkId',
    description: 'ID of the traffic link',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Traffic Link Categories deleted by Traffic Link ID successfully',
  })
  async deleteByTrafficLinkId(@Param('trafficLinkId') trafficLinkId: number) {
    await this.lprdTrafficLinkCategoriesService.deleteLprdTrafficLinkCategoryByTrafficLinkId(
      trafficLinkId,
      this.entityManager,
    );
    return {
      message:
        'Traffic Link Categories deleted by Traffic Link ID successfully',
    };
  }
}
