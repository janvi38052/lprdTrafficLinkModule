import { Module } from '@nestjs/common';
import { LprdTrafficSourceService } from './lprdtrafficsource.service';
import { LprdTrafficSourceController } from './lprdtrafficsource.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LprdTrafficLinks } from 'src/lprd-traffic-links/lprd-traffic-links.entity';
import { LprdTrafficSource } from './lprdtrafficsource.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LprdTrafficSource,LprdTrafficLinks])],
  providers: [LprdTrafficSourceService],
  controllers: [LprdTrafficSourceController ],
  exports:[LprdTrafficSourceService]
})
export class LprdtrafficsourceModule {}
