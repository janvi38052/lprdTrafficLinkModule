import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { LprdTrafficLinks } from './entities/lprd-traffic-links.entity';
import { BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { paginate } from 'src/shared/pagination';
import { search } from 'src/shared/searching';
import { sort } from 'src/shared/sorting';
import { CreateLprdTrafficLinkService } from './createLprdTrafficLinks.service';
import { UpdateLprdTrafficLinkService } from './updateLprdTrafficLinks.service';

export class LprdTrafficLinksService {
  constructor(
    @InjectRepository(LprdTrafficLinks)
    private readonly lprdTrafficLinkRepository: Repository<LprdTrafficLinks>,
    private readonly createLprdTrafficLinkService: CreateLprdTrafficLinkService,
    private readonly updateLprdTrafficLinkService: UpdateLprdTrafficLinkService,
  ) {}

  public async findAll(query: any): Promise<any> {
    try {
      const { page = 1, limit = 20, sortBy = 'id', order = 'ASC', searchQuery = '' } = query;

      const whereQuery = {};
      if (searchQuery) {
        const searchFields = [
          'id',
          'max_provider_delivery',
          'quality_score',
          'trafficSource.name',
          'trafficWebsite.name',
          'categories.lprdTrafficCategory.name',  
          'updatedByUser.first_name',
        ];
        whereQuery['search'] = search(searchQuery, searchFields);
      }

      const sortQuery = sort(sortBy, order);
      const paginationResult = await paginate(this.lprdTrafficLinkRepository, page, limit, whereQuery);

      const response = {
        data: paginationResult.data,
        meta: {
          total: paginationResult.total,
          totalPages: paginationResult.totalPages,
          page: paginationResult.page,
          limit: paginationResult.limit,
        },
        links: {
          next: paginationResult.page < paginationResult.totalPages ? `/traffic-links?page=${paginationResult.page + 1}` : null,
          prev: paginationResult.page > 1 ? `/traffic-links?page=${paginationResult.page - 1}` : null,
        },
      };

      return response;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException(error.message);
      }
    }
  }

  public handleCategoryFilter(query: any, qb: SelectQueryBuilder<LprdTrafficLinks>) {
    const categoryIds = query.filter?.lprd_category_ids;
    if (categoryIds) {
      qb.innerJoin('lprdTrafficLink.categories', 'categories');
      if (typeof categoryIds === 'string' && categoryIds.includes(',')) {
        const splitCategoryIds = categoryIds.split(',');
        qb.andWhere('categories.lprd_traffic_categories_id IN (:...categoryIds)', { categoryIds: splitCategoryIds });
      } else {
        qb.andWhere('categories.lprd_traffic_categories_id = :categoryId', { categoryId: categoryIds });
      }
    }
  }

  async getTrafficLinkById(id: number): Promise<LprdTrafficLinks> {
    const trafficLink = await this.lprdTrafficLinkRepository.findOne({
      where: { id: id },
      relations: [
        'trafficWebsite',
        'trafficSource',
        'categories',  
        //'categories.lprdTrafficCategory',  
        'clients',
       // 'clients.client',
        'campaigns',
        //'campaigns.campaign',
       // 'campaigns.campaign.clients',
      ],
      loadEagerRelations: true,
    });

    if (!trafficLink) {
      throw new NotFoundException('Traffic link not found');
    }

    return trafficLink;
  }
}
