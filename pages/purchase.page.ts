import { Page, expect } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly cartLink: string =`.shopping_cart_link`
    private readonly btnCheckout: string = `button[id='checkout']`
    private readonly inputFirstName:string = `input[id="first-name"]`
    private readonly inputLastName: string = `input[id="last-name"]`
    private readonly inputZipCode: string = `input[id="postal-code"]`
    private readonly inputContinue: string = `input[id="continue"]`
    private readonly  divCartItem: string = `.cart_item`
    private readonly btnFinish :string = `button[id=finish]`
    private readonly successMessage :string = `//h2[contains(text(),'Thank you for ')]`

    constructor(page: Page) {
        this.page = page;
    }

    public async selectCart() {
        await this.page.waitForSelector(this.cartLink,{state:'visible'})
        //await this.page.locator(this.cartLink).click({timeout:10000})
        await this.page.locator(this.cartLink).click()
    }

    public async selectCheckout() {
        //validating whether the added item visible in checkout page or not 
        expect(this.page.locator(this.divCartItem)).toBeVisible({timeout:30000})
        await this.page.locator(this.divCartItem).highlight()

        //selecting a checkout button to proceed further 
        await this.page.waitForSelector(this.btnCheckout,{state:'visible'})
        await this.page.locator(this.btnCheckout).click()
    }

    public async fillTheCheckoutInfo(fname:string, lname:string, zipcode:string) {
        await this.page.locator(this.inputFirstName).fill(fname)
        await this.page.locator(this.inputLastName).fill(lname)
        await this.page.locator(this.inputZipCode).fill(zipcode)
        
    }

    public async clickOnContinue() {
        await this.page.waitForSelector(this.inputContinue,{state:'visible'})
        await this.page.locator(this.inputContinue).click()
    }
    public async clickOnFinish() {
        await this.page.waitForLoadState()
        await this.page.waitForSelector(this.btnFinish,{state:'visible'})
        await this.page.locator(this.btnFinish).click()
    }

    public async validateSuccessMessage(message: string) {
        await this.page.locator(this.successMessage).highlight()
        const actErrorMessage = await this.page.locator(this.successMessage).textContent()
        expect(actErrorMessage).toBe(message)
    }
    

}