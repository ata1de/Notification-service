import { Module } from '@nestjs/common';
import { NotificationController } from './controllers/notifications.controller';

@Module({
  imports: [],
  controllers: [NotificationController],
  providers: [],
})
export class HttpModule {}
