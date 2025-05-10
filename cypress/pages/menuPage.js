class MenuPage {
    
    selectorsList() {
        const selector = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            myPerformanceButton: "[href='/web/index.php/performance/viewPerformanceModule']"
        }
        return selector
    }

    accessMyInfo(){
        cy.get(this.selectorsList().myInfoButton).click()
    }
    
    accessPerformance(){
        cy.get(this.selectorsList().myPerformanceButton).click()
    }
}

export default MenuPage