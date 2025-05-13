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

        
    filledPersonalField(first,middle,last){
            cy.get(this.selectorList().firstNameField).clear().type(first)
            cy.get(this.selectorList().middleNameField).clear().type(middle)
            cy.get(this.selectorList().lastNameField).clear().type(last)
           
    }
    filledEmployField(employeeID,otherID,driver,dateLicense){
        cy.get(this.selectorList().genericField).eq(4).clear().type(employeeID)
        cy.get(this.selectorList().genericField).eq(5).clear().type(otherID)
        cy.get(this.selectorList().genericField).eq(6).clear().type(driver)
        cy.get(this.selectorList().dateField).eq(0).clear().type(dateLicense)
        cy.get(this.selectorList().dateCloseButton).click()
    }

    filledEmploy2Field(datebirth){
        cy.get(this.selectorList().genericTwoField).eq(0).click()
        cy.get(this.selectorList().brazilianOpction).click()
        cy.get(this.selectorList().genericTwoField).eq(1).click()
        cy.get(this.selectorList().martialStatusOpction).click()
        cy.get(this.selectorList().dateField).eq(1).clear().type(datebirth)
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().maleSelectedOpction).click()
    }

    filledStatus(){
        cy.get(this.selectorList().buttonSaveSubmit).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
    }
    
    
}

export default MyInfoPage