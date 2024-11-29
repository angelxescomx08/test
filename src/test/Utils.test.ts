describe('Utils', () => {
  it('should return the uppercase text', () => {
    const text = 'Hello, world!';
    const expected = 'HELLO, WORLD!';

    const result = text.toUpperCase();

    expect(result).toBe(expected);
  });
})