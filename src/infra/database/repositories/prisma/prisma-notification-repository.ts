import { Injectable } from '@nestjs/common';
import { Notification } from 'src/application/entities/notification';
import { PrismaService } from '../../prisma.service';
import { NotificationRepository } from '../notification-repository';

@Injectable()
export class PrismaNotificationRepository extends NotificationRepository {
  constructor(private prismaService: PrismaService) {
    super();
  }

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        createdAt: notification.createdAt,
        readAt: notification.readAt,
        updatedAt: notification.updatedAt,
      },
    });
  }
}
