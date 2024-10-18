export class NotFoundNotification extends Error {
  constructor() {
    super('Notification not found');
  }
}
