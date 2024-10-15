import { Content } from './content';

describe('Content', () => {
  it('should create content', () => {
    const content = new Content('content');

    expect(content).toBeTruthy();
  });

  it('should not be able to create content with a length of less than 5', () => {
    expect(() => new Content('cont')).toThrow();
  });

  it('should not be able to create content with a length of greater than 240', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
