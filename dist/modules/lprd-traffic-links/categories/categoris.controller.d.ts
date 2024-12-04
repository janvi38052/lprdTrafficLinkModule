import { EntityManager } from 'typeorm';
import { LprdTrafficLinkCategoriesService } from './categories.service';
import { LprdTrafficLinksCategory } from './entities/categories.entity';
export declare class LprdTrafficLinkCategoriesController {
    private readonly lprdTrafficLinkCategoriesService;
    private readonly entityManager;
    constructor(lprdTrafficLinkCategoriesService: LprdTrafficLinkCategoriesService, entityManager: EntityManager);
    getAllCategories(): Promise<LprdTrafficLinksCategory[]>;
    create(categories: Partial<LprdTrafficLinksCategory>[]): Promise<{
        message: string;
    }>;
    deleteCategories(trafficLinkId: number, categoryIds: number[]): Promise<{
        message: string;
    }>;
    deleteByTrafficLinkId(trafficLinkId: number): Promise<{
        message: string;
    }>;
}
