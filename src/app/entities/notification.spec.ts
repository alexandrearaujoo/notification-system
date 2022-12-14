import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('shoud be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitacao de amizade'),
      category: 'Social',
      recipientId: 'example-recipientid',
    });

    expect(notification).toBeTruthy();
  });
});
