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

        cy.intercept('POST','https://demo.nopcommerce.com/register?returnurl=%2F').as('enterData')

        cy.visit('https://demo.nopcommerce.com/')

        regPage.clickRegGen()
        regPage.enterNameLname('Miki','Rados')
        regPage.enterDayMonYear('3','4','2001')
        regPage.enterEmailCheckCompany('test@test.com','My Company')
        regPage.enterPassConfReg('$ifra12','$ifra12')

        cy.wait('@enterData')
        cy.get('@enterData').then( document =>{
            console.log(document)
            expect(document.response.statusCode).to.equal(200)   
            expect(document.request.method).to.equal('POST')
            expect(document.responseWaited).to.equal(true)
            expect(document.request.responseTimeout).to.equal(30000)
            expect(document.state).to.equal('Complete')
        
        })

    })
         
    it.only('LogIn', () => {
    
        cy.visit('https://demo.nopcommerce.com/')

        cy.intercept('POST','https://demo.nopcommerce.com/login?returnurl=%2F').as('logIn')
        

        logIn.loginUserPassLbtn('test@test.com','$ifra12')

        cy.wait('@logIn')
        cy.get('@logIn').then(documentL =>{
            console.log(documentL)
            expect(documentL.response.statusCode).to.equal(302)
            expect(documentL.request.method).to.equal('POST')
            expect(documentL.responseWaited).to.equal(true)
            expect(documentL.request.responseTimeout).to.equal(30000)
            expect(documentL.state).to.equal('Complete')
    
        })
        
// Buy the Product
        buyTProd.chooseAproduct('2')

// Click on dropdown menu Please select the adress you want to ship to
        buyTProd.dDMenuShipping('Spain','Other','08001')

// Shopping Cart page
        shoppCart.shoppCart('2')
                 
           
    })
            
})  
    
    
      

    