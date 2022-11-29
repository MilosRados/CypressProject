export class ShoppingCart{
    
                  
     shoppCart(giftWrapp){
        cy.contains('Shopping cart').click()

        cy.contains('h1','Shopping cart').should('have.text','Shopping cart')

        cy.get('img[alt="Picture of HTC One M8 Android L 5.0 Lollipop"]').should('be.visible')

        cy.get('#checkout_attribute_1').select(giftWrapp).should('have.value','2')
         
        cy.contains('.terms-of-service','I agree with the terms of service and I adhere to them unconditionally').find('[type="checkbox"]').then(checkBox => {
         cy.wrap(checkBox)
         .check()
         }) 

     }       
   

}