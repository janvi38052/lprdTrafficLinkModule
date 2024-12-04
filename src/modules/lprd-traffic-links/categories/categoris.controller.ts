import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { LprdTrafficLinkCategoriesService } from './categories.service';
import { LprdTrafficLinksCategory } from './entities/categories.entity';

@Controller('lprd-traffic-link-categories')
export class LprdTrafficLinkCategoriesController {
  constructor(
    private readonly lprdTrafficLinkCategoriesService: LprdTrafficLinkCategoriesService,
    @InjectEntityManager() private readonly entityManager: EntityManager,
  ) {}

  // Fetch Traffic Link Categories
  @Get()
  async getAllCategories(): Promise<LprdTrafficLinksCategory[]> {
    return this.lprdTrafficLinkCategoriesService.getAllCategories();
  }

  // Create Traffic Link Categories
  @Post()
  async create(@Body() categories: Partial<LprdTrafficLinksCategory>[]) {
    await this.lprdTrafficLinkCategoriesService.createLprdTrafficLinkCategory(
      categories,
      this.entityManager,
    );
    return { message: 'Traffic Link Categories created successfully' };
  }

  // Delete Traffic Link Categories by category IDs
  @Delete(':trafficLinkId')
  async deleteCategories(
    @Param('trafficLinkId') trafficLinkId: number,
    @Body() categoryIds: number[], // Array of category IDs to delete
  ) {
    await this.lprdTrafficLinkCategoriesService.deleteLprdTrafficLinkCategory(
      categoryIds,
      trafficLinkId,
      this.entityManager,
    );
    return { message: 'Traffic Link Categories deleted successfully' };
  }

  // Delete all Traffic Link Categories by Traffic Link ID
  @Delete('by-traffic-link/:trafficLinkId')
  async deleteByTrafficLinkId(@Param('trafficLinkId') trafficLinkId: number) {
    await this.lprdTrafficLinkCategoriesService.deleteLprdTrafficLinkCategoryByTrafficLinkId(
      trafficLinkId,
      this.entityManager,
    );
    return { message: 'Traffic Link Categories deleted by Traffic Link ID successfully' };
  }
}
