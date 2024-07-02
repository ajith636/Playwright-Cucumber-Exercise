import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('Sort the items by price', async () => {
  await new Product(getPage()).selectSort();
});

Then(' Validate all 6 items are sorted correctly by price', async () => {
  await new Product(getPage()).validateSortedItemsByPrice();
});