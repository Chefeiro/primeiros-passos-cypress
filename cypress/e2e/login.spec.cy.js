import userData from '../fixtures/user-Data.json'
import LoginPage from '../pages/loginPage'
import dashboard from '../pages/dashboard'

const dash = new dashboard
const loginPage = new LoginPage

describe('Login Orange HRM Test', () => {

  it('Login Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUsers(userData.userSucess.username, userData.userSucess.password)
    dash.checkDashboardAcess()
   })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUsers(userData.userFail.username, userData.userFail.password)
    loginPage.invalidAcess()

  })
})