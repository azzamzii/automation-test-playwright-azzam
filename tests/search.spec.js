const { test } = require("@playwright/test");
const { HomePage } = require("../pages/HomePage");

test('Search for "Jacket" shows only jacket items', async ({ page }) => {
  const home = new HomePage(page);

  await home.goto();
  await home.searchFor("Jacket");
  await home.assertAllResultsContain("Jacket");
});
