class MyInfoPage {
        
    selectorList(){
        const selectors = {
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
            return selectors
        }

        
    filledField(){
            cy.get(this.selectorList.firstNameField).clear().type("Primeiro")
            cy.get(this.selectorList.middleNameField).clear().type("Meio")
            cy.get(this.selectorList.lastNameField).clear().type("Ultimo")
            cy.get(this.selectorList.genericField).eq(4).clear().type('Employee')
            cy.get(this.selectorList.genericField).eq(5).clear().type('Other Id')
            cy.get(this.selectorList.genericField).eq(6).clear().type('Driver')
            cy.get(this.selectorList.dateField).eq(0).clear().type('2020-05-01')
            cy.get(this.selectorList.dateCloseButton).click()
            cy.get(this.selectorList.genericTwoField).eq(0).click()
            cy.get(this.selectorList.brazilianOpction).click()
            cy.get(this.selectorList.genericTwoField).eq(1).click()
            cy.get(this.selectorList.martialStatusOpction).click()
            cy.get(this.selectorList.dateField).eq(1).clear().type('2001-10-08')
            cy.get(this.selectorList.dateCloseButton).click()
            cy.get(this.selectorList.maleSelectedOpction).click()
            cy.get(this.selectorList.buttonSaveSubmit).eq(0).click({force: true})
            cy.get('body').should('contain', 'Successfully Updated')
    }
    
    
}

export default MyInfoPage