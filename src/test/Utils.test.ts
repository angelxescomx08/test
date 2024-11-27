import { toUpperCase } from '../app/Utils';

describe('Utils', () => {
  it('should uppercase', () => {
    const text = 'hello';

    expect(toUpperCase(text)).toBe('HELLO');
  });
});