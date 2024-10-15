import { SendNotification } from './send-notifications-use-cases';

describe('SendNotification', () => {
  it('Should be able to send notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      category: 'any_category',
      content: 'any_content',
      recipientId: 'any_recipient_id',
    });

    expect(notification).toBeTruthy();
    expect(notification.category).toEqual('any_category');
  });
});
