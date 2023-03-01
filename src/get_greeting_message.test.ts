import getGreetingMessage from './get_greeting_message';

describe('getGreetingMessage', () => {
  it('returns personal greeting', () => {
    expect(getGreetingMessage('user')).toBe('Welcome, user!');
  });
});
