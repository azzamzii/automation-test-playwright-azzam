export class ProductsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.productItemSelector = ".products-grid .product-item";
    this.mainContent = page.locator("#maincontent");
  }

  async gotoLowToHigh() {
    await this.page.goto("https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html?product_list_order=price");
  }

  async gotoHighToLow() {
    await this.page.goto("https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html?product_list_order=price&product_list_dir=desc");
  }

  async getPrices() {
    return await this.page.$$eval(this.productItemSelector, (items) =>
      items
        .map((item) => {
          const priceEl = item.querySelector(".price");
          return priceEl ? parseFloat(priceEl.innerText.replace("$", "")) : null;
        })
        .filter(Boolean)
    );
  }
}
