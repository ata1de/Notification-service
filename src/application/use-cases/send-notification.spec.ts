import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notifications-use-cases';

let notificationRepository: InMemoryNotificationsRepository;

describe('SendNotification', () => {
  beforeEach(() => {
    notificationRepository = new InMemoryNotificationsRepository();
  });

  it('Should be able to send notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      category: 'any_category',
      content: 'any_content',
      recipientId: 'any_recipient_id',
    });

    expect(notification).toBeTruthy();
    expect(notification.category).toEqual('any_category');
    expect(notificationRepository.notifications).toHaveLength(1);
  });
});
