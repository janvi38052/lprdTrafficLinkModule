import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LprdTrafficLinksModule } from './modules/lprd-traffic-links/lprd-traffic-links.module';
import { LprdTrafficLinks } from './modules/lprd-traffic-links/entities/lprd-traffic-links.entity';
import { LprdTrafficLinksCategory } from './modules/lprd-traffic-links/categories/entities/categories.entity';
import { LprdTrafficLinkCategoriesModule } from './modules/lprd-traffic-links/categories/categories.module';
import { LprdTrafficLinksClient } from './modules/lprd-traffic-links/clients/entities/clients.entity';
import { LprdTrafficLinkClientsModule } from './modules/lprd-traffic-links/clients/clients.module';
import { LprdTrafficLinksCampaign } from './modules/lprd-traffic-links/campaigns/entities/campaigns.entity';
import { MaxDeliveryClientModule } from './modules/max-delivery-client/max-delivery-client.module';
import { MaxDeliveryClient } from './modules/max-delivery-client/entities/max-delivery-client.entity';
import { MaxDeliveryCampaignModule } from './modules/max-delivery-campaign/max-delivery-campaign.module';
import { MaxDeliveryCampaign } from './modules/max-delivery-campaign/entities/max-delivery-campaign.entity';
import { LprdtrafficsourceModule } from './modules/lprdtrafficsource/lprdtrafficsource.module';
import { LprdTrafficSource } from './modules/lprdtrafficsource/entities/lprdtrafficsource.entity';
import { LprdTrafficWebsitesModule } from './modules/lprd-traffic-websites/lprd-traffic-websites.module';
import { LprdTrafficWebsite } from './modules/lprd-traffic-websites/entities/lprd-traffic-websites.entity';
import { UserModule } from './modules/user/user.module';
import { User } from './modules/user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',   
      database: 'npm',
      entities: [LprdTrafficLinks,LprdTrafficLinksCategory,LprdTrafficLinksClient,LprdTrafficLinksCampaign,MaxDeliveryClient,MaxDeliveryCampaign,LprdTrafficSource,LprdTrafficWebsite,User],
      synchronize: true,       
      logging: true,
    }),
    LprdTrafficLinksModule,
    LprdTrafficLinkCategoriesModule,
    LprdTrafficLinkClientsModule,
    LprdTrafficLinksCampaign,
    MaxDeliveryClientModule,
    MaxDeliveryCampaignModule,
    LprdtrafficsourceModule,
    LprdTrafficWebsitesModule,
    UserModule,
    AuthModule,
    UsersModule
  ],

  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
      configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(LoggerMiddleware)
        .forRoutes('*')
      }
}
