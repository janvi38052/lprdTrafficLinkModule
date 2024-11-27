import { LprdTrafficLinksCategoryService } from './categories.service';
import { CreateLprdTrafficLinksCategoryDto } from './create-category.dto';
import { UpdateLprdTrafficLinksCategoryDto } from './update-category.dto';
import { LprdTrafficLinksCategory } from './categories.entity';
export declare class CategoriesController {
    private readonly categoryService;
    constructor(categoryService: LprdTrafficLinksCategoryService);
    create(createCategoryDto: CreateLprdTrafficLinksCategoryDto): Promise<LprdTrafficLinksCategory>;
    findAll(): Promise<LprdTrafficLinksCategory[]>;
    findOne(id: number): Promise<LprdTrafficLinksCategory>;
    update(id: number, updateCategoryDto: UpdateLprdTrafficLinksCategoryDto): Promise<LprdTrafficLinksCategory>;
    remove(id: number): Promise<void>;
}
