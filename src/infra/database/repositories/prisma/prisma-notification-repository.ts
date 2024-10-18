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

  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async countManyById(recipientId: string): Promise<number> {
    return await this.prismaService.notification.count({
      where: {
        recipientId,
      },
    });
  }

  async findById(id: string): Promise<Notification | null> {
    const raw = await this.prismaService.notification.findUnique({
      where: {
        id,
      },
    });

    if (!raw) {
      return null;
    }

    return raw;
  }
}
