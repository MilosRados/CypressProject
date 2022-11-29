export class RegPage{

// Register Page Verification

    clickRegister(){
        cy.contains('Register').click()
    }

    selectGen(){
        cy.get('#gender-male').click().should('be.checked')
    }

    enterName(){
        cy.get('#FirstName').type('Miki').should('have.value', 'Miki')
    }
    enterLastN(){
        cy.get('#LastName').type('Nosonja').should('have.value', 'Nosonja')
    }
    enterDayOfB(){
        cy.get('[name="DateOfBirthDay"]').select('3').should('have.value', '3')
    }

    enterMonthOfB(){
        cy.get('[name="DateOfBirthMonth"]').select('4').should('have.value', '4')
    }
    enterYearOfB(){
        cy.get('[name="DateOfBirthYear"]').select('2001').should('have.value', '2001')
    }

    enterEmail(){
        cy.get('#Email').type('radosavljevicmilos20@gmail.com').should('have.value', 'radosavljevicmilos20@gmail.com')
    }
    clickChecbox(){
        cy.get('#Newsletter').click().should('be.enabled')
    }

    enterCompanyN(){
        cy.get('#Company').type('My Company').should('have.value', 'My Company')
    }

    enterPass(){
        cy.get('#Password').type('mikijev').should('have.value','mikijev')
    }

    confirmPass(){
        cy.get('#ConfirmPassword').type('mikijev').should('have.value','mikijev')
    }

    clickRegisterB(){
        cy.get('#register-button').click()
    }
}