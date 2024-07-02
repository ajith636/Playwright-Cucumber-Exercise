import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly itemPrice:string = `(//div[@class='inventory_item_price'])`
    private readonly elmSort:string = `.product_sort_container`

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async selectSort() {
        await this.page.selectOption(this.elmSort,'lohi');
    }

    public async isSorted<T>(array: T[], compare: (a: T, b: T) => boolean): Promise<boolean> {
        for (let i = 0; i < array.length - 1; i++) {
            if (!compare(array[i], array[i + 1])) {
                return false;
            }
        }
        return true;
    }

    public async validateSortedItemsByPrice() {
        let pricesArray = new Array()
       const elmcount:number =  await this.page.locator(this.itemPrice).count()
       for(let i=0;i<=elmcount;i++){
        let price = await this.page.locator(`(//div[@class='inventory_item_price'])[${i}]`).textContent()
        pricesArray.push(price)
        console.log(pricesArray);
       }
    
    }

}