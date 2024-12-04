import { Module } from '@nestjs/common';
import { LprdTrafficLinkCategoriesService } from './categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LprdTrafficLinksCategory } from './entities/categories.entity';
import { LprdTrafficLinks } from '../entities/lprd-traffic-links.entity';
import { LprdTrafficLinkCategoriesController } from './categoris.controller';

@Module({
  imports:[TypeOrmModule.forFeature([LprdTrafficLinksCategory,LprdTrafficLinks])],
  providers: [LprdTrafficLinkCategoriesService],
  controllers: [LprdTrafficLinkCategoriesController],
  exports:[LprdTrafficLinkCategoriesService]
})
export class LprdTrafficLinkCategoriesModule {}
