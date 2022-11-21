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


it('LogIn', () => {
    
    cy.visit('https://demo.nopcommerce.com/')
    
// Click on Login option
    cy.get('.ico-login').click()
// Enter email in email field
    cy.get('#Email').type('radosavljevicmilos20@gmail.com').should('have.value','radosavljevicmilos20@gmail.com')
// Enter Password in pass field
    cy.get('#Password').type('mikijev').should('have.value', 'mikijev')
// Click on Login button
    cy.get('form > .buttons > .button-1').should('be.visible').and('be.enabled').click()
// Click on Electronics - Find it by tag name
    cy.get('img[title="Show products in category Electronics"]').should('be.visible').click()
// Click on Cell phones link
    cy.get('img[title="Show products in category Cell phones"]').should('be.visible').click()
// Click on HTC One M8 Phone model
    cy.get(':nth-child(1) > .product-item > .picture > a > img').should('be.visible').click()
// Assert Title
    cy.contains('HTC One M8 Android L 5.0 Lollipop').should('have.text', 'HTC One M8 Android L 5.0 Lollipop')
// Type 2 products next to Add to Card
    cy.get('#product_enteredQuantity_18').clear().type('2').should('be.enabled')

    cy.get('#add-to-cart-button-18').click().should('be.enabled').and('have.text','Add to cart')
// Click on dropdown menu Please select the adress you want to ship to
    cy.get('.product-estimate-shipping').click()
// Find Country & select Spain
    cy.get('#CountryId').select('Spain')
// State province, Other
    cy.get('#StateProvinceId').select('Other')
// Find Zip/Postal code by tag name & type value 08001
    cy.get('input[name="ZipPostalCode"]').type('08001').should('have.value','08001')
// Click on radio button Next Day Air
    // cy.get(':nth-child(2) > .estimate-shipping-row-item-radio > label').click()
// Assert Apply button
    cy.get('.active > .estimate-shipping-row-item-radio > label').click()
// Assert text Next Day Air
    cy.contains('Next Day Air').should('be.visible')
// Click on Apply button and Assert it
    cy.contains('Apply').should('be.enabled').and('have.text','Apply').click()
