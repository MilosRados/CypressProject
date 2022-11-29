// import cypress from "cypress";

export class LogIn{

    loginUserPassLbtn(email,pass){
        cy.contains('Log in').click()
        cy.get('#Email').type(email).should('have.value','test@test.com')
        cy.get('#Password').type(pass).should('have.value', '$ifra12')
        cy.get('form > .buttons > .button-1').should('be.visible').and('be.enabled').click()
    }

}