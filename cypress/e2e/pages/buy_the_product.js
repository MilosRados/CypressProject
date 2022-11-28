export class BuyTheProd{


    
    clickOnElectronics(){
        cy.get('img[title="Show products in category Electronics"]').should('be.visible').click()
    }

    clickOnCellPhones(){
        cy.get('img[title="Show products in category Cell phones"]').should('be.visible').click()
    }
    clickOnHtcOne(){
        cy.get(':nth-child(1) > .product-item > .picture > a > img').should('be.visible').click()
    }

    assertTitle(){
        cy.contains('HTC One M8 Android L 5.0 Lollipop').should('have.text', 'HTC One M8 Android L 5.0 Lollipop')
    }

    addTwoProdOnCard(){
        cy.get('#product_enteredQuantity_18').clear().type('2').should('be.enabled')
    }

    clickAddToCart(){
        cy.get('#add-to-cart-button-18').click().should('be.enabled').and('have.text','Add to cart')
    }
// Click on dropdown menu Please select the adress you want to ship to

    clickDropDown(){
        cy.get('.product-estimate-shipping').click()
    }
    selectCountry(){
        cy.get('#CountryId').select('Spain')
    }
    selectStateP(){
        cy.get('#StateProvinceId').select('Other')
    }
    enterZipCode(){
        cy.get('input[name="ZipPostalCode"]').type('08001').should('have.value','08001')
    }
    clickRadioNext(){
        cy.get(':nth-child(2) > .estimate-shipping-row-item-radio > label').click()
    }

    clickApply(){
        cy.contains('Apply').should('be.enabled').and('have.text','Apply').click()
    }

}   