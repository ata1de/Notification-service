import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { NotificationDTO } from './dto/notification-dto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async list() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async create(@Body() body: NotificationDTO) {
    const { category, content, recipientId } = body;

    return this.prismaService.notification.create({
      data: {
        category,
        content,
        recipientId,
      },
    });
  }
}
