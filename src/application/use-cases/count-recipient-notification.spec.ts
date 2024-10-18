import { Notification } from '@applications/entities/notification';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotification } from './count-recipient-notification';

let notificationRepository: InMemoryNotificationsRepository;

describe('Count Notification by recipientId', () => {
  beforeEach(() => {
    notificationRepository = new InMemoryNotificationsRepository();
  });

  it('should count recipient notification', async () => {
    const countRecipientNotification = new CountRecipientNotification(
      notificationRepository,
    );
    const notification = new Notification(
      makeNotification({ recipientId: 'ma' }),
    );
    notificationRepository.create(notification);

    const notification2 = new Notification(
      makeNotification({ recipientId: 'ma' }),
    );
    notificationRepository.create(notification2);

    const { count } = await countRecipientNotification.execute({
      notificationId: notification.id,
    });

    expect(count).toBe(2);
  });
});
