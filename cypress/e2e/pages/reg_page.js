export class RegPage{


    clickRegGen(){
        cy.contains('Register').click()
        cy.get('#gender-male').click().should('be.checked')
    }
    
    enterNameLname(name,lname){
        cy.get('#FirstName').type(name).should('have.value', 'Miki')
        cy.get('#LastName').type(lname).should('have.value', 'Rados')
     }
   
    enterDayMonYear(day,month,year){
        cy.get('[name="DateOfBirthDay"]').select(day).should('have.value', '3')
        cy.get('[name="DateOfBirthMonth"]').select(month).should('have.value', '4')
        cy.get('[name="DateOfBirthYear"]').select(year).should('have.value', '2001')
    }
    
    enterEmailCheckCompany(email,company){
        cy.get('#Email').type(email).should('have.value', 'test@test.com')
        cy.get('#Newsletter').click().should('be.enabled')
        cy.get('#Company').type(company).should('have.value', 'My Company')
    }

    enterPassConfReg(pass,confirmPass){
        cy.get('#Password').type(pass).should('have.value','$ifra12')
        cy.get('#ConfirmPassword').type(confirmPass).should('have.value','$ifra12')
        cy.get('#register-button').click()
    }

}