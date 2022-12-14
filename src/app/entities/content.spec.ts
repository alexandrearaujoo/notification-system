import { Content } from './content';

describe('Notification content', () => {
  it('shoud be able to create a notification content', () => {
    const content = new Content('Nova solicitacao de amizade');

    expect(content).toBeTruthy();
  });

  it('shoud not be able to create a notification content with last than 5 characters', () => {
    expect(() => new Content('Nova')).toThrow();
  });

  it('shoud not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('Nova'.repeat(241))).toThrow();
  });
});
