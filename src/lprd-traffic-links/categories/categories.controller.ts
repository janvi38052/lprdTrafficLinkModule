import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LprdTrafficLinksCategoryService } from './categories.service';
import {CreateLprdTrafficLinksCategoryDto } from './create-category.dto';
import { UpdateLprdTrafficLinksCategoryDto } from './update-category.dto';
import { LprdTrafficLinksCategory } from './categories.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: LprdTrafficLinksCategoryService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateLprdTrafficLinksCategoryDto): Promise<LprdTrafficLinksCategory> {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  async findAll(): Promise<LprdTrafficLinksCategory[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<LprdTrafficLinksCategory> {
    return this.categoryService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCategoryDto: UpdateLprdTrafficLinksCategoryDto,
  ): Promise<LprdTrafficLinksCategory> {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.categoryService.remove(id);
  }
}
