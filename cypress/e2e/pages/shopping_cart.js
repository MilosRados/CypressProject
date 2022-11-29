export class ShoppingCart{
    
// Shopping Cart Verification

     clickShoppCart(){
        cy.contains('Shopping cart').click()
     }       
     assertTitle(){
        cy.contains('h1','Shopping cart').should('have.text','Shopping cart')
     }
     assertProdImg(){
        cy.get('img[alt="Picture of HTC One M8 Android L 5.0 Lollipop"]').should('be.visible')

     }
     selectGiftW(){
        cy.get('#checkout_attribute_1').select('2').should('have.value','2')
     }
     clickChecbox(){
        cy.contains('.terms-of-service','I agree with the terms of service and I adhere to them unconditionally').find('[type="checkbox"]').then(checkBox => {
            cy.wrap(checkBox)
            .check()
            })
     }

}