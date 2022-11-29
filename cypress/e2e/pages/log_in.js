export class LogIn{

// Login Verification

    clickLogInOpt(){
        cy.contains('Log in').click()
    }

    enterUsername(){
        cy.get('#Email').type('radosavljevicmilos20@gmail.com').should('have.value','radosavljevicmilos20@gmail.com')
    }

    enterPass(){
        cy.get('#Password').type('mikijev').should('have.value', 'mikijev')
    }

    clickLogInBtn(){
        cy.get('form > .buttons > .button-1').should('be.visible').and('be.enabled').click()
    }
}