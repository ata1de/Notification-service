import { makeNotification } from '@test/factories/notification-factory';
import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should create a notification', () => {
    const notification = new Notification(makeNotification());
    expect(notification.id).toBe('id');
    expect(notification.content).toBeInstanceOf(Content);
    expect(notification.category).toBe('category');
    expect(notification.recipientId).toBe('recipientId');
  });
});
