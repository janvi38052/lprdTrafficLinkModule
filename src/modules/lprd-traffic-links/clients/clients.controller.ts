import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  HttpCode,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { LprdTrafficLinksClientService } from './clients.service';
import { LprdTrafficLinksClient } from './entities/clients.entity';
import { EntityManager } from 'typeorm';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { CreateLprdTrafficLinksClientDto } from './dtos/create-clients.dto';

@ApiTags('LPRD Traffic Links Client')
@Controller('lprd-traffic-links-client')
export class LprdTrafficLinksClientController {
  constructor(
    private readonly lprdTrafficLinksClientService: LprdTrafficLinksClientService,
    @Inject(EntityManager) private readonly entityManager: EntityManager,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create traffic link clients' })
  @ApiBody({
    description: 'Client details to be created',
    type: [CreateLprdTrafficLinksClientDto],
    examples: {
      singleClient: {
        value: { client_id: 1, lprd_traffic_link_id: 101 },
      },
      multipleClients: {
        value: [
          { client_id: 1, lprd_traffic_link_id: 101 },
          { client_id: 2, lprd_traffic_link_id: 102 },
        ],
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Traffic link clients created successfully',
  })
  async createTrafficLinkClient(
    @Body() values: Partial<LprdTrafficLinksClient> | Partial<LprdTrafficLinksClient>[],
  ) {
    const normalizedValues = Array.isArray(values) ? values : [values];

    await this.lprdTrafficLinksClientService.createLprdTrafficLinkClient(
      normalizedValues,
      this.entityManager,
    );

    return { message: 'Traffic link clients created successfully' };
  }

  @Delete(':lprdTrafficLinkId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete all clients associated with a specific Traffic Link ID',
  })
  @ApiParam({
    name: 'lprdTrafficLinkId',
    description: 'ID of the Traffic Link',
    example: 101,
  })
  @ApiResponse({
    status: 204,
    description: 'Traffic link clients deleted successfully',
  })
  async deleteTrafficLinkClientByTrafficLinkId(
    @Param('lprdTrafficLinkId') lprdTrafficLinkId: number,
  ) {
    await this.lprdTrafficLinksClientService.deleteLprdTrafficLinkClientByTrafficLinkId(
      lprdTrafficLinkId,
      this.entityManager,
    );

    return { message: 'Traffic link client deleted successfully' };
  }

  @Delete(':lprdTrafficLinkId/clients')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete specific clients by Traffic Link ID and Client IDs',
  })
  @ApiParam({
    name: 'lprdTrafficLinkId',
    description: 'ID of the Traffic Link',
    example: 101,
  })
  @ApiBody({
    description: 'Array of Client IDs to delete',
    type: [Number],
    examples: {
      clientIds: {
        value: [1, 2, 3],
      },
    },
  })
  @ApiResponse({
    status: 204,
    description: 'Selected traffic link clients deleted successfully',
  })
  async deleteTrafficLinkClients(
    @Param('lprdTrafficLinkId') lprdTrafficLinkId: number,
    @Body() removedElements: number[],
  ) {
    await this.lprdTrafficLinksClientService.deleteLprdTrafficLinkClient(
      removedElements,
      lprdTrafficLinkId,
      this.entityManager,
    );

    return { message: 'Selected traffic link clients deleted successfully' };
  }
}
