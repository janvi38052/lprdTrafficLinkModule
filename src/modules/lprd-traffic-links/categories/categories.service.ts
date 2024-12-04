import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { LprdTrafficLinksCategory } from './entities/categories.entity';

export class LprdTrafficLinkCategoriesService {
  constructor(
    @InjectRepository(LprdTrafficLinksCategory)
    private readonly lprdTrafficLinkCategoryRepository: Repository<LprdTrafficLinksCategory>,
  ) {}

  // Create Traffic Link Categories
  async createLprdTrafficLinkCategory(
    values: Partial<LprdTrafficLinksCategory>[],
    transactionalEntityManager: EntityManager,
  ) {
    const trafficLinkCategory = await transactionalEntityManager
      .createQueryBuilder()
      .insert()
      .into(LprdTrafficLinksCategory)
      .values(values)
      .execute();

    let trafficLinksCategory = [];
    for (let i = 0; i < values.length; i++) {
      trafficLinksCategory.push({ traffic_link_id : values[i].lprd_traffic_link_id, category_id: values[i].id });
    }
  }

  // Delete Traffic Link Categories
  async deleteLprdTrafficLinkCategory(
    removedElements: number[],
    lprdTrafficLinkId: number,
    transactionalEntityManager: EntityManager,
  ) {
    await transactionalEntityManager
      .createQueryBuilder()
      .delete()
      .from(LprdTrafficLinksCategory)
      .where('lprd_traffic_link_id = :lprdTrafficLinkId', { lprdTrafficLinkId })
      .andWhere('lprd_traffic_categories_id IN (:...removedElements)', { removedElements })
      .execute();

    let trafficLinksCategories = [];
    for (let i = 0; i < removedElements.length; i++) {
      trafficLinksCategories.push({ traffic_link_id: lprdTrafficLinkId, category_id: removedElements[i] });
    }
  }

  // Delete Traffic Link Categories by Traffic Link ID
  async deleteLprdTrafficLinkCategoryByTrafficLinkId(
    lprdTrafficLinkId: number,
    transactionalEntityManager: EntityManager,
  ) {
    await transactionalEntityManager
      .createQueryBuilder()
      .delete()
      .from(LprdTrafficLinksCategory)
      .where('lprd_traffic_link_id = :lprdTrafficLinkId', { lprdTrafficLinkId })
      .execute();
  }

  // Fetch all Traffic Link Categories
  async getAllCategories(): Promise<LprdTrafficLinksCategory[]> {
    return this.lprdTrafficLinkCategoryRepository.find();
  }
}
