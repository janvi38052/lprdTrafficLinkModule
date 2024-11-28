import { Module } from '@nestjs/common';
import { LprdTrafficWebsiteService } from './lprd-traffic-websites.service';
import { LprdTrafficWebsiteController } from './lprd-traffic-websites.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LprdTrafficWebsite } from './entities/lprd-traffic-websites.entity';
import { LprdTrafficLinks } from 'src/modules/lprd-traffic-links/entities/lprd-traffic-links.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LprdTrafficWebsite,LprdTrafficLinks])],
  providers: [LprdTrafficWebsiteService ],
  controllers: [LprdTrafficWebsiteController ],
  exports : [LprdTrafficWebsiteService]
})
export class LprdTrafficWebsitesModule {}
