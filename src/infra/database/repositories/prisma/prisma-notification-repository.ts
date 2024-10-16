import { Injectable } from '@nestjs/common';
import { Notification } from 'src/application/entities/notification';
import { NotificationMapper } from '../../mappers/notification-mapper';
import { PrismaService } from '../../prisma.service';
import { NotificationRepository } from '../notification-repository';

@Injectable()
export class PrismaNotificationRepository extends NotificationRepository {
  constructor(private prismaService: PrismaService) {
    super();
  }

  async create(notification: Notification): Promise<void> {
    const raw = NotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw,
    });
  }
}
