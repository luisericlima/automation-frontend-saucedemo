const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const users = require('../fixtures/users');
const products = require('../fixtures/products');

test.describe('Testes do Carrinho', () => {
  let inventory;
  let cart;

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    inventory = new InventoryPage(page);
    cart = new CartPage(page);

    await login.goto();
    await login.login(users.standardUser.username, users.standardUser.password);
  });

  test('deve adicionar e remover produtos', async () => {
    await inventory.addProductToCart(products.backpack);
    await inventory.addProductToCart(products.bikeLight);

    await inventory.goToCart();
    await cart.removeProduct(products.bikeLight);

    await expect(cart.getItemsCount()).resolves.toBe(1);
  });
});
