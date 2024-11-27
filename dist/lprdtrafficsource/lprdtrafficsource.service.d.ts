import { Repository } from 'typeorm';
import { LprdTrafficSource } from './lprdtrafficsource.entity';
import { CreateLprdTrafficSourceDto } from './create-lprdtrafficsource.dto';
import { UpdateLprdTrafficSourceDto } from './update-lprdtrafficsource.dto';
export declare class LprdTrafficSourceService {
    private readonly lprdTrafficSourceRepository;
    constructor(lprdTrafficSourceRepository: Repository<LprdTrafficSource>);
    create(data: CreateLprdTrafficSourceDto): Promise<LprdTrafficSource>;
    findAll(): Promise<LprdTrafficSource[]>;
    findOne(id: number): Promise<LprdTrafficSource>;
    update(id: number, data: UpdateLprdTrafficSourceDto): Promise<LprdTrafficSource>;
    remove(id: number): Promise<void>;
}
