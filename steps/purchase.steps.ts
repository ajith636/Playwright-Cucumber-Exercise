import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('Select the cart', async () => {
    await new Purchase(getPage()).selectCart()
});

Then('Select Checkout', async () => {
    await new Purchase(getPage()).selectCheckout()
});
 
Then('Fill in the First Name, Last Name, and Zip\\/Postal Code', async (checkoutInfo) => {
   const userDetails = checkoutInfo.hashes();
   for(const {fname, lname, zipcode} of userDetails) {
    await new Purchase(getPage()).fillTheCheckoutInfo(fname,lname,zipcode);
   }
});

Then('Select Continue', async () => {
    await new Purchase(getPage()).clickOnContinue()
});
Then('Select Finish', async () => {
    await new Purchase(getPage()).clickOnFinish()
});

Then('Validate the text {string}', async (message) => {
    await new Purchase(getPage()).validateSuccessMessage(message)
});