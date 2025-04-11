import { expect, test } from "@playwright/test";
import { ProductsPage } from "../pages/ProductPage";

test.describe("Product Sorting Functionality", () => {
  let productsPage;

  test.beforeEach(async ({ page }) => {
    productsPage = new ProductsPage(page);
  });

  test("Sort by Price - Low to High", async () => {
    await productsPage.gotoLowToHigh();
    await expect(productsPage.mainContent).toContainText("Set Descending Direction");

    const prices = await productsPage.getPrices();
    console.log("Low to High Prices:", prices);

    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
  });

  test("Sort by Price - High to Low", async () => {
    await productsPage.gotoHighToLow();
    await expect(productsPage.mainContent).toContainText("Set Ascending Direction");

    const prices = await productsPage.getPrices();
    console.log("High to Low Prices:", prices);

    const sorted = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sorted);
  });
});
