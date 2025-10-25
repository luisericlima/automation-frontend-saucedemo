const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const users = require('../fixtures/users');
const products = require('../fixtures/products');

test.describe('Testes de Inventário', () => {
  let inventory;
  let cart;

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    inventory = new InventoryPage(page);
    cart = new CartPage(page);

    await login.goto();
    await login.login(users.standardUser.username, users.standardUser.password);
  });

  test('deve exibir a página de inventário corretamente', async () => {
    await inventory.assertOnInventoryPage();
  });

  test('deve adicionar múltiplos produtos ao carrinho', async () => {
    await inventory.addProductToCart(products.backpack);
    await inventory.addProductToCart(products.bikeLight);
    await inventory.addProductToCart(products.boltTShirt);

    const count = await inventory.getCartCount();
    await expect(count).toBe(3);
  });

  test('deve abrir o carrinho e ver os itens adicionados', async () => {
    await inventory.addProductToCart(products.backpack);
    await inventory.addProductToCart(products.bikeLight);

    await inventory.goToCart();
    await expect(cart.getItemsCount()).resolves.toBe(2);
  });
});
