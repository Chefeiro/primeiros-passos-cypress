import userData from '../fixtures/user-Data.json'
import myInfo from '../fixtures/my-Info.json'
import LoginPage from '../pages/loginPage.js'
import dashboard from '../pages/dashboard.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage
const dash = new dashboard
const menuPage = new MenuPage
const myInfo = new MyInfoPage



describe('Orange HRM Test', () => {

  const selectorList = {


  }


  it('Login Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUsers(userData.userSucess.username, userData.userSucess.password)
    dash.checkDashboardAcess()
    menuPage.accessMyInfo()
    myInfo.filledField()
   })
   
 

  })
  // it('Login - Fail', () => {
  //   cy.visit('/auth/login')
  //   cy.get(selectorList.usernameField).type(userData.userFail.username)
  //   cy.get(selectorList.passwordField).type(userData.userFail.password)
  //   cy.get(selectorList.loginButton).click()
  //   cy.get(selectorList.wrongCredentialAlert)