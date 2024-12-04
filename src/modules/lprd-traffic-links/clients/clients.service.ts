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

  // Method to handle the creation of traffic link clients
  async createLprdTrafficLinkClient(
    values: Partial<LprdTrafficLinksClient>[],
    transactionalEntityManager: EntityManager,
  ) {
    // Insert the values into the database
    await transactionalEntityManager
      .createQueryBuilder()
      .insert()
      .into(LprdTrafficLinksClient)
      .values(values)
      .execute();

    // Prepare the traffic link clients for synchronization
    const trafficLinkClients = values.map((value) => ({
      traffic_link_id: value.lprd_traffic_link_id, // Ensure this is correct in your entity
      client_id: value.client_id, // Ensure this is correct in your entity
    }));

    // Sync the traffic link clients with the external service (if needed)
   
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
