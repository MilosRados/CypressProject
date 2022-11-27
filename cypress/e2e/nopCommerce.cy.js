import{ RegPage } from "./pages/reg_page"
import { LogIn } from "./pages/log_in"


const regPage = new RegPage()
const logIn = new LogIn()

describe('nopCommerce testing', () => {
    it('nopCommerce Registration', function() {

        cy.visit('https://demo.nopcommerce.com/')

        regPage.clickRegister()
        regPage.selectGen()
        regPage.enterName()
        regPage.enterLastN()
        regPage.enterDayOfB()
        regPage.enterMonthOfB()
        regPage.enterYearOfB()
        regPage.enterEmail()
        regPage.clickChecbox()
        regPage.enterCompanyN()
        regPage.enterPass()
        regPage.confirmPass()
        regPage.clickRegisterB()

    })
         
    it('LogIn', () => {
    
        cy.visit('https://demo.nopcommerce.com/')

        logIn.clickLogInOpt()
        logIn.enterUsername()
        logIn.enterPass()
        logIn.clickLogInBtn()
        
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
           cy.get(':nth-child(2) > .estimate-shipping-row-item-radio > label').click()
            
          
            // Assert Apply button
            cy.get('.active > .estimate-shipping-row-item-radio > label').click()
        // Assert text Next Day Air
            cy.contains('Next Day Air').should('be.visible')
        // Click on Apply button and Assert it
            cy.contains('Apply').should('be.enabled').and('have.text','Apply').click()
            cy.contains('Shopping cart').click()
            cy.contains('h1','Shopping cart').should('have.text','Shopping cart')
   
            cy.get('img[alt="Picture of HTC One M8 Android L 5.0 Lollipop"]').should('be.visible')

            cy.get('#checkout_attribute_1').select('2').should('have.value','2')

            cy.contains('.terms-of-service','I agree with the terms of service and I adhere to them unconditionally').find('[type="checkbox"]').then(checkBox => {
            cy.wrap(checkBox)
            .check()
            })
   
           
            })
            
        })  
    
    
      

    