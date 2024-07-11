import getGreetingMessage from './getGreetingMessage';

describe('getGreetingMessage', () => {
  it('returns personal greeting', () => {
    expect(getGreetingMessage('user')).toBe('Welcome, user!');
  });
});
