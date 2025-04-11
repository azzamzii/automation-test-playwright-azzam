const { expect } = require("@playwright/test");

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.getByPlaceholder("Search entire store here...");
    this.productTitles = page.locator(".product-item-link");
  }

  async goto() {
    await this.page.goto("https://magento.softwaretestingboard.com/");
  }

  async searchFor(keyword) {
    await this.searchBox.fill(keyword);
    await Promise.all([this.page.waitForLoadState("networkidle"), this.page.keyboard.press("Enter")]);
  }

  async assertAllResultsContain(text) {
    await this.productTitles.first().waitFor({ state: "visible" });
    const titles = await this.productTitles.allTextContents();
    for (const title of titles) {
      expect(title.toLowerCase()).toContain(text.toLowerCase());
    }
  }
};
