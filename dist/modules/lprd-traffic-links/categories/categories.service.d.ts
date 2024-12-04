import { EntityManager, Repository } from 'typeorm';
import { LprdTrafficLinksCategory } from './entities/categories.entity';
export declare class LprdTrafficLinkCategoriesService {
    private readonly lprdTrafficLinkCategoryRepository;
    constructor(lprdTrafficLinkCategoryRepository: Repository<LprdTrafficLinksCategory>);
    createLprdTrafficLinkCategory(values: Partial<LprdTrafficLinksCategory>[], transactionalEntityManager: EntityManager): Promise<void>;
    deleteLprdTrafficLinkCategory(removedElements: number[], lprdTrafficLinkId: number, transactionalEntityManager: EntityManager): Promise<void>;
    deleteLprdTrafficLinkCategoryByTrafficLinkId(lprdTrafficLinkId: number, transactionalEntityManager: EntityManager): Promise<void>;
    getAllCategories(): Promise<LprdTrafficLinksCategory[]>;
}
