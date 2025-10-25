const { expect } = require('@playwright/test');

exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = '.cart_item';
  }

  async removeProduct(productId) {
    const button = this.page.locator(`[data-test="remove-${productId}"]`);
    await button.waitFor({ state: 'visible' });
    await button.click();
  }

  async getItemsCount() {
    return await this.page.locator(this.cartItems).count();
  }
};
