import userData from '../fixtures/user-Data.json'


describe('Orange HRM Test', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input",
    dateField: "[placeholder='yyyy-dd-mm']",
    genericTwoField: "[tabindex='0']",
    dateCloseButton: ".--close",
    brazilianOpction: ":nth-child(27)",
    martialStatusOpction: ".oxd-select-dropdown > :nth-child(4)",
    maleSelectedOpction: ":nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input",
    buttonSaveSubmit: "[type='submit']",
    messageSaveSubmit: ".oxd-toast"
  }


  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSucess.username)
    cy.get(selectorList.passwordField).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type("Primeiro")
    cy.get(selectorList.middleNameField).clear().type("Meio")
    cy.get(selectorList.lastNameField).clear().type("Ultimo")
    cy.get(selectorList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorList.genericField).eq(5).clear().type('Other Id')
    cy.get(selectorList.genericField).eq(6).clear().type('Driver')
    cy.get(selectorList.dateField).eq(0).clear().type('2020-05-01')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.genericTwoField).eq(0).click()
    cy.get(selectorList.brazilianOpction).click()
    cy.get(selectorList.genericTwoField).eq(1).click()
    cy.get(selectorList.martialStatusOpction).click()
    cy.get(selectorList.dateField).eq(1).clear().type('2001-10-08')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.maleSelectedOpction).click()
    cy.get(selectorList.buttonSaveSubmit).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})

