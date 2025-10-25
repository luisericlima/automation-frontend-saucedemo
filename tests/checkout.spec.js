const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const users = require('../fixtures/users');
const products = require('../fixtures/products');

test.describe('Testes de Checkout', () => {
  let inventory;
  let checkout;

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    inventory = new InventoryPage(page);
    checkout = new CheckoutPage(page);

    await login.goto();
    await login.login(users.standardUser.username, users.standardUser.password);
  });

  test('deve completar uma compra com 2 ou mais produtos', async ({ page }) => {
    await inventory.addProductToCart(products.backpack);
    await inventory.addProductToCart(products.fleeceJacket);

    await inventory.goToCart();
    await expect(page).toHaveURL(/.*cart.html/);

    await checkout.gotoCheckoutStepOne();

    await checkout.checkout('Manus', 'Agent', '12345');
    await checkout.assertSuccessMessage();
  });
});
