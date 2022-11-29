import{ RegPage } from "./pages/reg_page"
import { LogIn } from "./pages/log_in"
import { BuyTheProd } from "./pages/buy_the_product"
import { ShoppingCart } from "./pages/shopping_cart"


const regPage = new RegPage()
const logIn = new LogIn()
const buyTProd = new BuyTheProd()
const shoppCart = new ShoppingCart()

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
        
// Buy the Product
        buyTProd.clickOnElectronics()
        buyTProd.clickOnCellPhones()
        buyTProd.clickOnHtcOne()
        buyTProd.assertTitle()
        buyTProd.addTwoProdOnCard()
        buyTProd.clickAddToCart()
    
// Click on dropdown menu Please select the adress you want to ship to 
        buyTProd.clickDropDown()
        buyTProd.selectCountry()
        buyTProd.selectStateP()
        buyTProd.enterZipCode()
        buyTProd.clickRadioNext()
        buyTProd.clickApply()

// Shopping Cart page
        shoppCart.clickShoppCart()
        shoppCart.assertTitle()
        shoppCart.assertProdImg()
        shoppCart.selectGiftW()
        shoppCart.clickChecbox()
          
           
    })
            
})  
    
    
      

    