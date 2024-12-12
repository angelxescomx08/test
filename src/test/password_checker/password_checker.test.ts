import { PasswordChecker } from '../../app/password_checker/password-checker'
describe('PasswordChecker test suite', ()=>{
  let sut: PasswordChecker
  beforeEach(()=>{
    sut = new PasswordChecker()
  })
  it('Should do nothing for the moment', ()=>{
    sut.checkPassword()
  })
})