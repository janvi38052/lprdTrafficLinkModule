import { Module } from '@nestjs/common';
import { LprdTrafficSourceService } from './lprdtrafficsource.service';
import { LprdTrafficSourceController } from './lprdtrafficsource.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LprdTrafficLinks } from 'src/modules/lprd-traffic-links/entities/lprd-traffic-links.entity';
import { LprdTrafficSource } from './entities/lprdtrafficsource.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LprdTrafficSource,LprdTrafficLinks])],
  providers: [LprdTrafficSourceService],
  controllers: [LprdTrafficSourceController ],
  exports:[LprdTrafficSourceService]
})
export class LprdtrafficsourceModule {}
