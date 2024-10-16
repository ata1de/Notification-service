import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { NotificationRepository } from './repositories/notification-repository';
import { PrismaNotificationRepository } from './repositories/prisma/prisma-notification-repository';

@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
