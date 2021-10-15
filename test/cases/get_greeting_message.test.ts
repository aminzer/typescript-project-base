import getGreetingMessage from '../../dist';

describe('getGreetingMessage', () => {
  it('returns personal greeting', () => {
    expect(getGreetingMessage('user')).toBe('Welcome, user!');
  });
});
