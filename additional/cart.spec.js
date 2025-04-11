import { test } from "@playwright/test";
import { CartPage } from "./CartPage";

test.setTimeout(60000);

test.describe("Shopping Cart", () => {
  let cart;

  test.beforeEach(async ({ page }) => {
    cart = new CartPage(page);
    await cart.goto();
    await cart.selectOptions();
  });

  test("should add item to cart", async () => {
    await cart.addToCart();
  });

  test("should show correct size and color in cart", async () => {
    await cart.addToCart();
    await cart.openCart();
    await cart.viewDetails();
  });

  test("should update quantity and subtotal correctly", async () => {
    await cart.addToCart();
    await cart.openCart();
    await cart.updateQuantity("2");
  });
});
