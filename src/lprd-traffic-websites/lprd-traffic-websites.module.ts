import { Module } from '@nestjs/common';
import { LprdTrafficWebsiteService } from './lprd-traffic-websites.service';
import { LprdTrafficWebsiteController } from './lprd-traffic-websites.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LprdTrafficWebsite } from './lprd-traffic-websites.entity';
import { LprdTrafficLinks } from 'src/lprd-traffic-links/lprd-traffic-links.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LprdTrafficWebsite,LprdTrafficLinks])],
  providers: [LprdTrafficWebsiteService ],
  controllers: [LprdTrafficWebsiteController ],
  exports : [LprdTrafficWebsiteService]
})
export class LprdTrafficWebsitesModule {}
