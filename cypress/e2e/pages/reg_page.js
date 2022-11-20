export class RegPage{

clickOnReg(){
    cy.get('.ico-register').click()
}

clickOnGen(){
    cy.get('#gender-male').click().should('be.checked')
}

enterFirstName(){
    cy.get('#FirstName').type('Miki').should('have.value', 'Miki')
}
}
export const regPage = new RegPage()