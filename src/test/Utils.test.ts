import { getStringInfo } from "../app/utils";

describe('Utils', () => {
  it('should return the uppercase text', () => {
    const text = 'Hello, world!';
    const expected = 'HELLO, WORLD!';

    const result = text.toUpperCase();

    expect(result).toBe(expected);
  });

  //only se usa para correr solo un test
  it.only('should return info for valid string', ()=>{
    const actual = getStringInfo('My-String');
  
    expect(actual.lowerCase).toBe('my-string');

    //toEqual compara los valores no las referencias
    expect(actual.extraInfo).toEqual({})
    expect(actual.characters.length).toBe(9);
    expect(actual.characters).toHaveLength(9);
    expect(actual.characters).toEqual(['M', 'y', '-','S', 't', 'r','i', 'n', 'g']);
    expect(actual.characters).toContain<string>('M');

    //expect.arrayContaining sirve para comparar arrays
    expect(actual.characters).toEqual(
      expect.arrayContaining(['S', 't', 'r','i', 'n', 'g', 'M', 'y', '-'])
    );

    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
});
})