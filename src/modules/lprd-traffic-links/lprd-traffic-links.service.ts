import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LprdTrafficLinks } from './entities/lprd-traffic-links.entity';
import { CreateLprdTrafficLinksDto } from './dtos/create-lprd-traffic-links.dto';
import { UpdateLprdTrafficLinksDto } from './dtos/update-lprd-traffic-links.dto';
import { LprdTrafficLinksCategoryService } from './categories/categories.service';
import { LprdTrafficLinksClientService } from './clients/clients.service';
import { MaxDeliveryClientService } from 'src/modules/max-delivery-client/max-delivery-client.service';
import { MaxDeliveryCampaignService } from 'src/modules/max-delivery-campaign/max-delivery-campaign.service';
import { LprdTrafficSourceService } from 'src/modules/lprdtrafficsource/lprdtrafficsource.service';
import { LprdTrafficWebsiteService } from 'src/modules/lprd-traffic-websites/lprd-traffic-websites.service';
import { UserService } from 'src/modules/user/user.service';
import { paginate } from 'src/shared/pagination';  // Import paginate function
import { search } from 'src/shared/searching';    // Import search function
import { sort } from 'src/shared/sorting';       // Import sort function

@Injectable()
export class LprdTrafficLinksService {
  constructor(
    @InjectRepository(LprdTrafficLinks)
    private readonly lprdTrafficLinksRepository: Repository<LprdTrafficLinks>,
    private readonly categoryService: LprdTrafficLinksCategoryService,
    private readonly clientService: LprdTrafficLinksClientService,
    private readonly campaignsService: LprdTrafficLinksClientService,
    private readonly maxDeliveryClientService: MaxDeliveryClientService,
    private readonly maxDeliverCampaignService: MaxDeliveryCampaignService,
    private readonly lprdTrafficSourceService: LprdTrafficSourceService,
    private readonly lprdTrafficWebsiteService: LprdTrafficWebsiteService,
    private readonly userService: UserService
  ) {}

  async create(data: CreateLprdTrafficLinksDto) {
    const newTrafficLink = this.lprdTrafficLinksRepository.create(data);
    return this.lprdTrafficLinksRepository.save(newTrafficLink);
  }

  async findAll(page: number = 1, limit: number = 10, searchQuery: string = '', sortBy: string = 'tag', order: 'ASC' | 'DESC' = 'ASC') {
    const query = searchQuery ? search(searchQuery, ['tag', 'locale']) : {}; 
    const orderBy = sortBy ? sort(sortBy, order) : {};
    const trafficLinks = await paginate(this.lprdTrafficLinksRepository, page, limit, query);



    const categories = await this.categoryService.findAll();
    const clients = await this.clientService.findAll();
    const campaigns = await this.campaignsService.findAll();
    const maxDeliveryClients = await this.maxDeliveryClientService.findAll();
    const maxDeliveryCampaign = await this.maxDeliverCampaignService.findAll();
    const lprdTrafficSource = await this.lprdTrafficSourceService.findAll();
    const lprdTrafficwebsites = await this.lprdTrafficWebsiteService.findAll();
    const user = await this.userService.findAll();

    return {
      trafficLinks,
      categories,
      clients,
      campaigns,
      maxDeliveryClients,
      maxDeliveryCampaign,
      lprdTrafficSource,
      lprdTrafficwebsites,
      user
    };
  }

  async findOne(id: number) {
    const trafficLink = await this.lprdTrafficLinksRepository.findOne({ where: { id } });
    if (!trafficLink) {
      throw new Error(`Traffic link with ID ${id} not found`);
    }

    const categories = await this.categoryService.findAll();
    const clients = await this.clientService.findAll();
    const campaigns = await this.campaignsService.findAll();
    const maxDeliveryClients = await this.maxDeliveryClientService.findAll();
    const maxDeliveryCampaign = await this.maxDeliverCampaignService.findAll();
    const lprdTrafficSource = await this.lprdTrafficSourceService.findAll();
    const lprdTrafficwebsites = await this.lprdTrafficWebsiteService.findAll();
    const user = await this.userService.findAll();

    return {
      trafficLink,
      categories,
      clients,
      campaigns,
      maxDeliveryClients,
      maxDeliveryCampaign,
      lprdTrafficSource,
      lprdTrafficwebsites,
      user
    };
  }

  async update(id: number, data: UpdateLprdTrafficLinksDto) {
    await this.lprdTrafficLinksRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.lprdTrafficLinksRepository.delete(id);
    return { message: `Traffic link with ID ${id} has been removed.` };
  }
}
