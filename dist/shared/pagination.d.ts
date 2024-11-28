import { Repository } from 'typeorm';
export declare const paginate: <T>(repo: Repository<T>, page: number, limit: number, query?: any) => Promise<{
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}>;
