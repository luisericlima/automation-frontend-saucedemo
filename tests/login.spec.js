const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const users = require('../fixtures/users');

test.describe('Testes de Login', () => {

  test('deve logar com sucesso', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.goto();
    await login.login(users.standardUser.username, users.standardUser.password);

    await inventory.assertOnInventoryPage();
  });

  test('deve mostrar erro para usuário bloqueado', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(users.lockedOutUser.username, users.lockedOutUser.password);

    await login.assertErrorMessage('Epic sadface: Sorry, this user has been locked out.');
  });
});
