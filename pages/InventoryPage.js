const { expect } = require('@playwright/test');

exports.InventoryPage = class InventoryPage {
  constructor(page) {
    this.page = page;
    this.logo = '.app_logo';
    this.title = '.title';
    this.cartLink = '.shopping_cart_link';
  }

  async assertOnInventoryPage() {
    await expect(this.page).toHaveURL(/.*inventory.html/);
    await expect(this.page.locator(this.logo)).toBeVisible();
    await expect(this.page.locator(this.title)).toHaveText('Products');
  }

  async addProductToCart(productId) {
    const button = this.page.locator(`[data-test="add-to-cart-${productId}"]`);
    await button.waitFor({ state: 'visible' });
    await button.click();
  }

  async removeProductFromCart(productId) {
    const button = this.page.locator(`[data-test="remove-${productId}"]`);
    await button.waitFor({ state: 'visible' });
    await button.click();
  }

  async goToCart() {
    const link = this.page.locator(this.cartLink);
    await link.waitFor({ state: 'visible' });
    await link.click();
  }

  async getCartCount() {
    const badge = this.page.locator('.shopping_cart_badge');
    if (await badge.isVisible()) {
      return parseInt(await badge.textContent(), 10);
    }
    return 0;
  }
};
