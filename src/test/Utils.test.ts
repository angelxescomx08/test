import { getStringInfo, StringUtils, toUpperCase } from '../app/utils'

describe('Utils', () => {
  it('should return the uppercase text', () => {
    const text = 'Hello, world!'
    const expected = 'HELLO, WORLD!'

    const result = text.toUpperCase()

    expect(result).toBe(expected)
  })

  describe.only('StringUtils', () => {
    let stringUtils: StringUtils

    beforeEach(() => {
      stringUtils = new StringUtils()
    })

    it('should return the uppercase text', () => {
      const text = 'Hello, world!'
      const expected = 'HELLO, WORLD!'

      const result = stringUtils.toUpperCase(text)

      expect(result).toBe(expected)
    })
  })

  describe('toUpperCase', () => {
    it.each([
      { text: 'Hello, world!', expected: 'HELLO, WORLD!' },
      { text: 'My name is John Doe', expected: 'MY NAME IS JOHN DOE' },
      { text: '123', expected: '123' },
    ])('$text should return $expected', ({ text, expected }) => {
      const result = toUpperCase(text)
      expect(result).toBe(expected)
    })
  })

  describe('getStringInfo for arg My-String should', ()=>{
        
    test('return right length', ()=>{
      const actual = getStringInfo('My-String')
      expect(actual.characters).toHaveLength(9)
    })
    test('return right lower case', ()=>{
      const actual = getStringInfo('My-String')
      expect(actual.lowerCase).toBe('my-string')
    })
    test('return right upper case', ()=>{
      const actual = getStringInfo('My-String')
      expect(actual.upperCase).toBe('MY-STRING')
    })
    test('return right characters', ()=>{
      const actual = getStringInfo('My-String')
      expect(actual.characters).toEqual(['M', 'y', '-','S', 't', 'r','i', 'n', 'g'])
      expect(actual.characters).toContain<string>('M')
      expect(actual.characters).toEqual(
        expect.arrayContaining(['S', 't', 'r','i', 'n', 'g', 'M', 'y', '-'])
      )
    })
    test('return defined extra info', ()=>{
      const actual = getStringInfo('My-String')
      expect(actual.extraInfo).toBeDefined()
    })
    test('return right extra info', ()=>{
      const actual = getStringInfo('My-String')
      expect(actual.extraInfo).toEqual({})
    })
  })
})