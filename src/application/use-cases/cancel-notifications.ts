import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../../infra/database/repositories/notification-repository';
import { NotFoundNotification } from '../errors/notFoundNotification';

interface CancelNotificationRequest {
  notificationId: string;
}

interface CancelNotificationResponse {
  message: string;
}

@Injectable()
export class CancelNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification =
      await this.notificationRepository.findById(notificationId);

    if (!notification) {
      throw new NotFoundNotification();
    }

    notification.cancel();

    await this.notificationRepository.save(notification);

    return {
      message: 'Notification canceled',
    };
  }
}
