import { LprdTrafficLinksCategoryService } from './categories.service';
import { CreateLprdTrafficLinksCategoryDto } from './dtos/create-category.dto';
import { UpdateLprdTrafficLinksCategoryDto } from './dtos/update-category.dto';
import { LprdTrafficLinksCategory } from './entities/categories.entity';
export declare class CategoriesController {
    private readonly categoryService;
    constructor(categoryService: LprdTrafficLinksCategoryService);
    create(createCategoryDto: CreateLprdTrafficLinksCategoryDto): Promise<LprdTrafficLinksCategory>;
    findAll(): Promise<LprdTrafficLinksCategory[]>;
    findOne(id: number): Promise<LprdTrafficLinksCategory>;
    update(id: number, updateCategoryDto: UpdateLprdTrafficLinksCategoryDto): Promise<LprdTrafficLinksCategory>;
    remove(id: number): Promise<void>;
}
