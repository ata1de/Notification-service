export class Content {
  private readonly content: string;

  constructor(content: string) {
    const isContentLenght = this.validateLength(content);

    if (!isContentLenght) {
      throw new Error('Content must be between 5 and 240 characters');
    }

    this.content = content;
  }

  get value(): string {
    return this.content;
  }

  private validateLength(content: string) {
    return content.length >= 5 && content.length <= 240;
  }
}
