import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notifications-use-cases';
import { NotificationDTO } from '../dto/notification-dto';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: NotificationDTO) {
    const { category, content, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    return {
      notification: NotificationViewModel.toHttp(notification),
    };
  }
}
