import { Notification } from '@applications/entities/notification';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotification } from './get-recipient-notification';

describe('Get notifications by recipient id ', () => {
  it('should return a list of notifications', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const getRecipientNotification = new GetRecipientNotification(
      notificationRepository,
    );

    const notification = new Notification(
      makeNotification({ recipientId: 'test' }),
    );

    console.log('notification criada', notification);

    notificationRepository.create(notification);

    const { notifications } = await getRecipientNotification.execute({
      recipientId: 'test',
    });

    expect(notifications.length).toBe(1);
  });
});
