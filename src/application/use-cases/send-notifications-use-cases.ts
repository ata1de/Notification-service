import { randomUUID } from 'crypto';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repositories/notification-repository';

interface SendNotificationRequest {
  category: string;
  content: string;
  recipientId: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification(
      {
        category,
        content: new Content(content),
        recipientId,
      },
      randomUUID(),
    );

    await this.notificationRepository.create(notification);

    // return this.prismaService.notification.create({
    //   data: {
    //     category,
    //     content,
    //     recipientId,
    //   },
    // });

    return {
      notification,
    };
  }
}
