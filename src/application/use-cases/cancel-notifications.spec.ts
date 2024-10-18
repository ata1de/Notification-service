import { NotFoundNotification } from '@applications/errors/notFoundNotification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { CancelNotification } from './cancel-notifications';

let notificationRepository: InMemoryNotificationsRepository;

describe('CancelNotifications', () => {
  beforeEach(() => {
    notificationRepository = new InMemoryNotificationsRepository();
  });

  it('should cancel all notifications', async () => {
    const cancelNotifications = new CancelNotification(notificationRepository);
    const notification = new Notification(
      {
        category: 'category',
        content: new Content('content'),
        recipientId: 'recipientId',
      },
      'notificationId',
    );
    notificationRepository.create(notification);

    const response = await cancelNotifications.execute({
      notificationId: notification.id,
    });

    expect(response.message).toBe('Notification canceled');
    expect(notificationRepository.notifications[0].cancelAt).toEqual(
      expect.any(Date),
    );
  });

  it('should throw an error if notification is not found', async () => {
    const cancelNotifications = new CancelNotification(notificationRepository);

    await expect(
      cancelNotifications.execute({ notificationId: 'invalidId' }),
    ).rejects.toThrow(NotFoundNotification);
  });
});
