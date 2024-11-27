import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LprdTrafficLinks } from './lprd-traffic-links.entity';
import { CreateLprdTrafficLinksDto } from './create-lprd-traffic-links.dto';
import { UpdateLprdTrafficLinksDto } from './update-lprd-traffic-links.dto';
import { LprdTrafficLinksCategoryService } from './categories/categories.service';
import { LprdTrafficLinksClientService } from './clients/clients.service';
import { MaxDeliveryClientService } from 'src/max-delivery-client/max-delivery-client.service';
import { MaxDeliveryCampaignService } from 'src/max-delivery-campaign/max-delivery-campaign.service';
import { LprdTrafficSourceService } from 'src/lprdtrafficsource/lprdtrafficsource.service';
import { LprdTrafficWebsiteService } from 'src/lprd-traffic-websites/lprd-traffic-websites.service'; // Import Website Service
import { UserService } from 'src/user/user.service';
import { use } from 'passport';

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
    private readonly lprdTrafficWebsiteService: LprdTrafficWebsiteService, // Inject Website Service
    private readonly userService:UserService
  ) {}

  // Create a new LprdTrafficLink
  async create(data: CreateLprdTrafficLinksDto) {
    const newTrafficLink = this.lprdTrafficLinksRepository.create(data);
    return this.lprdTrafficLinksRepository.save(newTrafficLink);
  }

  // Get all LprdTrafficLinks along with related data
  async findAll() {
    const trafficLinks = await this.lprdTrafficLinksRepository.find();
    const categories = await this.categoryService.findAll();
    const clients = await this.clientService.findAll();
    const campaigns = await this.campaignsService.findAll();
    const maxDeliveryClients = await this.maxDeliveryClientService.findAll();
    const maxDeliveryCampaign = await this.maxDeliverCampaignService.findAll();
    const lprdTrafficSource = await this.lprdTrafficSourceService.findAll();
    const lprdTrafficwebsites = await this.lprdTrafficWebsiteService.findAll(); // Fetch Websites
    const user = await this.userService.findAll();
    return {
      trafficLinks,
      categories,
      clients,
      campaigns,
      maxDeliveryClients,
      maxDeliveryCampaign,
      lprdTrafficSource,
      lprdTrafficwebsites, // Include Websites
      user
    };
  }

  // Get a single LprdTrafficLink by ID with related data
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
    const lprdTrafficwebsites = await this.lprdTrafficWebsiteService.findAll(); // Fetch Websites
    const user = await this.userService.findAll();
    return {
      trafficLink,
      categories,
      clients,
      campaigns,
      maxDeliveryClients,
      maxDeliveryCampaign,
      lprdTrafficSource,
      lprdTrafficwebsites, // Include Websites
      user
    };
  }

  // Update LprdTrafficLink by ID
  async update(id: number, data: UpdateLprdTrafficLinksDto) {
    await this.lprdTrafficLinksRepository.update(id, data);
    return this.findOne(id);
  }

  // Delete LprdTrafficLink by ID
  async remove(id: number) {
    await this.lprdTrafficLinksRepository.delete(id);
    return { message: `Traffic link with ID ${id} has been removed.` };
  }
}
