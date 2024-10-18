import { Content } from '@applications/entities/content';
import { Notification } from '@applications/entities/notification';
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
      {
        category: 'category',
        content: new Content('content'),
        recipientId: 'recipientId',
      },
      'notificationId',
    );
    notificationRepository.create(notification);

    const notification2 = new Notification(
      {
        category: 'category2',
        content: new Content('content2'),
        recipientId: 'recipientId',
      },
      'notificationId2',
    );
    notificationRepository.create(notification2);

    const { count } = await countRecipientNotification.execute({
      notificationId: notification.id,
    });

    expect(count).toBe(2);
  });
});
