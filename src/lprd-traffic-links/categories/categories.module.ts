import { Module } from '@nestjs/common';
import { LprdTrafficLinksCategoryService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LprdTrafficLinksCategory } from './categories.entity';
import { LprdTrafficLinks } from '../lprd-traffic-links.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LprdTrafficLinksCategory,LprdTrafficLinks])],
  providers: [LprdTrafficLinksCategoryService],
  controllers: [CategoriesController],
  exports:[LprdTrafficLinksCategoryService]
})
export class LprdTrafficLinkCategoriesModule {}
