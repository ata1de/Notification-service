import { Content } from '@applications/entities/content';
import { Injectable } from '@nestjs/common';
import { makeNotification } from '@test/factories/notification-factory';
import { NotificationRepository } from '../../infra/database/repositories/notification-repository';
import { Notification } from '../entities/notification';

interface SendNotificationRequest {
  category: string;
  content: string;
  recipientId: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification(
      makeNotification({
        category,
        content: new Content(content),
        recipientId,
      }),
    );

    await this.notificationRepository.create(notification);

    return {
      notification,
    };
  }
}
