import { LprdTrafficLinksService } from './lprdTrafficLinks.service';
import CreateLprdTrafficLinksDto from './dtos/create-lprd-traffic-links.dto';
import UpdateLprdTrafficLinkDto from './dtos/update-lprd-traffic-links.dto';
import { LprdTrafficLinks } from './entities/lprd-traffic-links.entity';
import { CreateLprdTrafficLinkService } from './createLprdTrafficLinks.service';
import { UpdateLprdTrafficLinkService } from './updateLprdTrafficLinks.service';
import { Request } from 'express';
export declare class LprdTrafficLinksController {
    private readonly lprdTrafficLinksService;
    private readonly createLprdTrafficLinkService;
    private readonly updateLprdTrafficLinkService;
    constructor(lprdTrafficLinksService: LprdTrafficLinksService, createLprdTrafficLinkService: CreateLprdTrafficLinkService, updateLprdTrafficLinkService: UpdateLprdTrafficLinkService);
    create(createLprdTrafficLinkDto: CreateLprdTrafficLinksDto, req: Request): Promise<any>;
    update(id: number, updateLprdTrafficLinkDto: UpdateLprdTrafficLinkDto, req: Request): Promise<any>;
    findAll(query: any): Promise<any>;
    findOne(id: number): Promise<LprdTrafficLinks>;
}
