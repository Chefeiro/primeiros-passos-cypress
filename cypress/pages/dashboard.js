class dashboard {
    selectorList(){
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        }
        return selectors
    }
    checkDashboardAcess(){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorList().dashboardGrid).should('be.visible')
        cy.get(this.selectorList().myInfoButton).click()
    }

}

export default dashboard