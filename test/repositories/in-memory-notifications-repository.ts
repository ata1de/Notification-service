import { NotFoundNotification } from '@applications/errors/notFoundNotification';
import { Notification } from 'src/application/entities/notification';
import { NotificationRepository } from '../../src/infra/database/repositories/notification-repository';

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  async findAll(): Promise<Notification[]> {
    return this.notifications;
  }

  findById(id: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (notification) => notification.id === id,
    );

    if (!notification) {
      return null;
    }
    return Promise.resolve(notification);
  }

  save(notification: Notification): Promise<void> {
    const index = this.notifications.findIndex((n) => n.id === notification.id);

    if (index === -1) {
      throw new NotFoundNotification();
    }

    this.notifications[index] = notification;

    return Promise.resolve();
  }
}
