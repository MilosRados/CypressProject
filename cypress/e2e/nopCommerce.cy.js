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

        regPage.clickRegGen()
        regPage.enterNameLname('Miki','Rados')
        regPage.enterDayMonYear('3','4','2001')
        regPage.enterEmailCheckCompany('test@test.com','My Company')
        regPage.enterPassConfReg('$ifra12','$ifra12')

    })
         
    it('LogIn', () => {
    
        cy.visit('https://demo.nopcommerce.com/')

        logIn.loginUserPassLbtn('test@test.com','$ifra12')
        
// Buy the Product

        buyTProd.chooseAproduct('2')

// Click on dropdown menu Please select the adress you want to ship to
        buyTProd.dDMenuShipping('Spain','Other','08001')

// Shopping Cart page
        shoppCart.shoppCart('2')
                 
           
    })
            
})  
    
    
      

    