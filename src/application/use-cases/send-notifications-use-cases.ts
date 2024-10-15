import { randomUUID } from 'crypto';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';

interface SendNotificationRequest {
  category: string;
  content: string;
  recipientId: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;

    // return this.prismaService.notification.create({
    //   data: {
    //     category,
    //     content,
    //     recipientId,
    //   },
    // });

    const notification = new Notification(
      {
        category,
        content: new Content(content),
        recipientId,
      },
      randomUUID(),
    );

    return {
      notification,
    };
  }
}
