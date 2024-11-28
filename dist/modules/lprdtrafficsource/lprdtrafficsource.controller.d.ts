import { LprdTrafficSourceService } from './lprdtrafficsource.service';
import { CreateLprdTrafficSourceDto } from './dtos/create-lprdtrafficsource.dto';
import { UpdateLprdTrafficSourceDto } from './dtos/update-lprdtrafficsource.dto';
import { LprdTrafficSource } from './entities/lprdtrafficsource.entity';
export declare class LprdTrafficSourceController {
    private readonly lprdTrafficSourceService;
    constructor(lprdTrafficSourceService: LprdTrafficSourceService);
    create(createLprdTrafficSourceDto: CreateLprdTrafficSourceDto): Promise<LprdTrafficSource>;
    findAll(): Promise<LprdTrafficSource[]>;
    findOne(id: number): Promise<LprdTrafficSource>;
    update(id: number, updateLprdTrafficSourceDto: UpdateLprdTrafficSourceDto): Promise<LprdTrafficSource>;
    remove(id: number): Promise<void>;
}
