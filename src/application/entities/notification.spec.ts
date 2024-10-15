import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should create a notification', () => {
    const notification = new Notification(
      {
        content: new Content('content'),
        category: 'category',
        recipientId: 'recipientId',
      },
      'id',
    );
    expect(notification.id).toBe('id');
    expect(notification.content).toBeInstanceOf(Content);
    expect(notification.category).toBe('category');
    expect(notification.recipientId).toBe('recipientId');
  });
});
