const { expect } = require("@playwright/test");
export class CartPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.sizeOption = page.getByRole("option", { name: "M" });
    this.colorOption = page.getByRole("option", { name: "Black" });
    this.addToCartButton = page.getByRole("button", { name: "Add to Cart" });
    this.successAlert = page.getByRole("alert");
    this.cartCounter = page.locator(".counter-number");
    this.myCartLink = page.getByRole("link", { name: /My Cart/i });
    this.detailsTab = page.getByRole("tab", { name: /See Details/ });
    this.miniCart = page.locator("#mini-cart");
    this.qtyInput = page.getByRole("spinbutton", { name: "Qty:" });
    this.updateButton = page.getByRole("button", { name: "Update", exact: true });
    this.subtotalText = page.getByText("$98.00");
  }

  async goto() {
    await this.page.goto("https://magento.softwaretestingboard.com/montana-wind-jacket.html");
  }

  async selectOptions() {
    await this.sizeOption.click();
    await this.colorOption.click();
  }

  async addToCart() {
    await this.addToCartButton.click();
    await this.page.waitForLoadState("networkidle");
    await expect(this.successAlert).toContainText("You added");
    await expect(this.cartCounter).toHaveText("1");
  }

  async openCart() {
    await this.myCartLink.click();
    await expect(this.detailsTab).toBeVisible();
  }

  async viewDetails() {
    await this.detailsTab.click();
    await expect(this.miniCart).toContainText("Size M");
    await expect(this.miniCart).toContainText("Color Black");
  }

  async updateQuantity(qty = "2") {
    await this.qtyInput.fill(qty);
    await this.qtyInput.press("Tab");
    await this.updateButton.waitFor({ state: "visible" });
    await this.updateButton.click();
    await expect(this.subtotalText).toBeVisible();
  }
}
