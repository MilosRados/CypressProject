export class BuyTheProd{


    
    chooseAproduct(numOfProd){
        cy.get('img[title="Show products in category Electronics"]').should('be.visible').click()

        cy.get('img[title="Show products in category Cell phones"]').should('be.visible').click()

        cy.get(':nth-child(1) > .product-item > .picture > a > img').should('be.visible').click()

        cy.contains('HTC One M8 Android L 5.0 Lollipop').should('have.text', 'HTC One M8 Android L 5.0 Lollipop')

        cy.get('#product_enteredQuantity_18').clear().type(numOfProd).should('be.enabled')

        cy.get('#add-to-cart-button-18').click().should('be.enabled').and('have.text','Add to cart')
    }

// Click on dropdown menu Please select the adress you want to ship to

    dDMenuShipping(country,stateProvince,zipCode){
        cy.get('.product-estimate-shipping').click()

        cy.get('#CountryId').select(country)

        cy.get('#StateProvinceId').select(stateProvince)

        cy.get('input[name="ZipPostalCode"]').type(zipCode).should('have.value','08001')

        cy.get(':nth-child(2) > .estimate-shipping-row-item-radio > label').click()
        
        cy.contains('Apply').should('be.enabled').and('have.text','Apply').click()


    }

}   