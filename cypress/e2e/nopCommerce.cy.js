// import { describe } from "mocha"



describe('nopCommerce testing', () => {
    it('nopCommerce Registration', function() {
        cy.visit('https://demo.nopcommerce.com/')
    
    // // Find Register button by class name
       cy.get('.ico-register').click()
    
    //  Assert radio button
        cy.get('#gender-male').click().should('be.checked')
    //  Find and type First name
         cy.get('#FirstName').type('Miki').should('have.value', 'Miki')
    //  Type Last Name
         cy.get('#LastName').type('Nosonja').should('have.value', 'Nosonja')
    //  Dropdown menu Day - Assert
         cy.get('[name="DateOfBirthDay"]').select('3').should('have.value', '3')
    // Dropdown Month
        cy.get('[name="DateOfBirthMonth"]').select('4').should('have.value', '4')
    // //  Dropdown Year
        cy.get('[name="DateOfBirthYear"]').select('2001').should('have.value', '2001')
    // Email field
        cy.get('#Email').type('radosavljevicmilos20@gmail.com').should('have.value', 'radosavljevicmilos20@gmail.com')
    // Check box Newsletter
        cy.get('#Newsletter').click().should('be.enabled')
    //  Company name
       cy.get('#Company').type('My Company').should('have.value', 'My Company')
    //   Password
       cy.get('#Password').type('mikijev').should('have.value','mikijev')
    // Confirm Password
       cy.get('#ConfirmPassword').type('mikijev').should('have.value','mikijev')
    //  Click on Reguister button
       cy.get('#register-button').click()
    
    })
         

 })

    