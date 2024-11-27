import { Repository } from 'typeorm';
import { LprdTrafficLinksCategory } from './categories.entity';
import { CreateLprdTrafficLinksCategoryDto } from './create-category.dto';
import { UpdateLprdTrafficLinksCategoryDto } from './update-category.dto';
export declare class LprdTrafficLinksCategoryService {
    private readonly lprdTrafficLinksCategoryRepository;
    constructor(lprdTrafficLinksCategoryRepository: Repository<LprdTrafficLinksCategory>);
    create(data: CreateLprdTrafficLinksCategoryDto): Promise<LprdTrafficLinksCategory>;
    findAll(): Promise<LprdTrafficLinksCategory[]>;
    findOne(id: number): Promise<LprdTrafficLinksCategory>;
    update(id: number, data: UpdateLprdTrafficLinksCategoryDto): Promise<LprdTrafficLinksCategory>;
    remove(id: number): Promise<void>;
}
