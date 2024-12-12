import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { LprdTrafficLinksClient } from './entities/clients.entity';


@Injectable()
export class LprdTrafficLinksClientService {
  constructor(
    @InjectRepository(LprdTrafficLinksClient)
    private readonly clientRepository: Repository<LprdTrafficLinksClient>,
  ) {}

  async createLprdTrafficLinkClient(
    values: Partial<LprdTrafficLinksClient>[],
    transactionalEntityManager: EntityManager,
  ) {
    await transactionalEntityManager
      .createQueryBuilder()
      .insert()
      .into(LprdTrafficLinksClient)
      .values(values)
      .execute();

    const trafficLinkClients = values.map((value) => ({
      traffic_link_id: value.lprd_traffic_link_id,
      client_id: value.client_id, 
    }));

   
  }
  async deleteLprdTrafficLinkClientByTrafficLinkId(
    lprdTrafficLinkId: number,
    transactionalEntityManager: EntityManager,
  ) {
    await transactionalEntityManager
      .createQueryBuilder()
      .delete()
      .from(LprdTrafficLinksClient)
      .where('lprd_traffic_link_id = :lprdTrafficLinkId', { lprdTrafficLinkId })
      .execute();
      
  }

  async deleteLprdTrafficLinkClient(
    removedElements: number[],
    lprdTrafficLinkId: number,
    transactionalEntityManager: EntityManager,
  ) {
    await transactionalEntityManager
      .createQueryBuilder()
      .delete()
      .from(LprdTrafficLinksClient)
      .where('lprd_traffic_link_id = :lprdTrafficLinkId', { lprdTrafficLinkId })
      .andWhere('client_id IN (:...removedElements)', { removedElements })
      .execute();

      let trafficLinkClients = [];
      for (let i = 0; i < removedElements.length; i++) {
        trafficLinkClients.push({ traffic_link_id: lprdTrafficLinkId, client_id: removedElements[i]});
      }

 
    }
  }
