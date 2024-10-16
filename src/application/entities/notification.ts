import { Replace } from '../helpers/replace';
import { Content } from './content';

interface NotificationProps {
  content: Content;
  readAt?: Date | null;
  category: string;
  recipientId: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id: string,
  ) {
    this._id = id;
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get content(): Content {
    return this.props.content;
  }

  set content(value: Content) {
    this.props.content = value;
  }

  get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  set readAt(value: Date | null | undefined) {
    this.props.readAt = value;
  }

  get createdAt(): Date {
    return this.props.readAt;
  }

  get category(): string {
    return this.props.category;
  }

  set category(value: string) {
    this.props.category = value;
  }

  get recipientId(): string {
    return this.props.recipientId;
  }

  set recipientId(value: string) {
    this.props.recipientId = value;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  set updatedAt(value: Date) {
    this.props.updatedAt = value;
  }
}
