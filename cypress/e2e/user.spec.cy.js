import userData from '../fixtures/user-Data.json'
import LoginPage from '../pages/loginPage.js'
import dashboard from '../pages/dashboard.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance');


const chance = new Chance()
const loginPage = new LoginPage
const dash = new dashboard
const menuPage = new MenuPage
const myInfo = new MyInfoPage



describe('Orange HRM Test', () => {

  it('Login Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUsers(userData.userSucess.username, userData.userSucess.password)
    dash.checkDashboardAcess()
    menuPage.accessMyInfo()
    myInfo.filledPersonalField(chance.first(),chance.string(),chance.last())
    myInfo.filledEmployField(chance.ssn({ dashes: false }),chance.ssn({ dashes: false }),chance.ssn({ dashes: false }),'2023-05-01')
    myInfo.filledEmploy2Field('2001-05-07')
    myInfo.filledStatus()

   })
   
 

  })
  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUsers(userData.userFail.username,userData.userFail.password)
    loginPage.invalidAcess()
  })