import { Notification } from '../../../application/entities/notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(id: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
  abstract countManyById(recipientId: string): Promise<number>;
}
