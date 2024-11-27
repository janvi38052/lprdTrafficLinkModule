import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { LprdTrafficLinks } from 'src/lprd-traffic-links/lprd-traffic-links.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,LprdTrafficLinks])],
  providers: [UserService],
  controllers: [UserController],
  exports:[UserService]
})
export class UserModule {}
