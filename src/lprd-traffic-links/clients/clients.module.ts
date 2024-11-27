import { Module } from '@nestjs/common';
import { LprdTrafficLinksClientService } from './clients.service';
import { LprdTrafficLinksClientController } from './clients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LprdTrafficLinksClient } from './clients.entity';
import { LprdTrafficLinks } from '../lprd-traffic-links.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LprdTrafficLinksClient,LprdTrafficLinks])],
  providers: [LprdTrafficLinksClientService],
  controllers: [LprdTrafficLinksClientController],
  exports:[LprdTrafficLinksClientService]
})
export class LprdTrafficLinkClientsModule {}
