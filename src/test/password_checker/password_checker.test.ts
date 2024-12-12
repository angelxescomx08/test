import { PasswordChecker } from '../../app/password_checker/password-checker'
describe('PasswordChecker test suite', ()=>{
  let sut: PasswordChecker
  beforeEach(()=>{
    sut = new PasswordChecker()
  })

  it('Password with less than 8 character is invalid', ()=>{
    const actual = sut.checkPassword('12345Aa')
    expect(actual).toBe(false)
  })

  it('Password with more than 8 character is valid', ()=>{
    const actual = sut.checkPassword('1234567890Aa')
    expect(actual).toBe(true)
  })

  it('Password with no uppercase letter is invalid', ()=>{
    const actual = sut.checkPassword('12345678abcd')
    expect(actual).toBe(false)
  })

  it('Password with uppercase letter is valid', ()=>{
    const actual = sut.checkPassword('12345678Abcd')
    expect(actual).toBe(true)
  })

  it('Password with no lowercase letter is invalid', ()=>{
    const actual = sut.checkPassword('12345678ABCD')
    expect(actual).toBe(false)
  })

  it('Password with lowercase letter is valid', ()=>{
    const actual = sut.checkPassword('12345678ABcd')
    expect(actual).toBe(true)
  })
})