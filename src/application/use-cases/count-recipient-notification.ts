import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../../infra/database/repositories/notification-repository';
import { NotFoundNotification } from '../errors/notFoundNotification';

interface CountRecipientNotificationRequest {
  notificationId: string;
}

interface CountRecipientNotificationResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: CountRecipientNotificationRequest,
  ): Promise<CountRecipientNotificationResponse> {
    const { notificationId } = request;

    const notification =
      await this.notificationRepository.findById(notificationId);

    if (!notification) {
      throw new NotFoundNotification();
    }

    const count = await this.notificationRepository.countManyById(
      notification.recipientId,
    );

    return {
      count: count,
    };
  }
}
