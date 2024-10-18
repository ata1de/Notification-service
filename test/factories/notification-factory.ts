import { Content } from '@applications/entities/content';
import { Notification } from '@applications/entities/notification';

type Override = Partial<Notification>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'category',
    content: new Content('content'),
    recipientId: 'recipientId',
    ...override,
  });
}
