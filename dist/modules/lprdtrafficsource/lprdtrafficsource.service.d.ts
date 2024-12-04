import { Repository } from 'typeorm';
import { LprdTrafficSource } from './entities/lprdtrafficsource.entity';
import { CreateLprdTrafficSourceDto } from './dtos/create-lprdtrafficsource.dto';
import { UpdateLprdTrafficSourceDto } from './dtos/update-lprdtrafficsource.dto';
export declare class LprdTrafficSourceService {
    private readonly lprdTrafficSourceRepository;
    constructor(lprdTrafficSourceRepository: Repository<LprdTrafficSource>);
    create(data: CreateLprdTrafficSourceDto): Promise<LprdTrafficSource>;
    findAll(): Promise<LprdTrafficSource[]>;
    findOne(id: number): Promise<LprdTrafficSource>;
    update(id: number, data: UpdateLprdTrafficSourceDto): Promise<LprdTrafficSource>;
    remove(id: number): Promise<void>;
    getTrafficSourceById(id: number): Promise<LprdTrafficSource>;
}
