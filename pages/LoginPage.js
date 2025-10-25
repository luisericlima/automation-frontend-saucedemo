require('dotenv').config();

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.baseUrl = process.env.BASE_URL; 
  }

  async goto() {
    await this.page.goto(this.baseUrl);
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async assertErrorMessage(message) {
    await this.page.locator('[data-test="error"]').waitFor();
    const errorText = await this.page.locator('[data-test="error"]').textContent();
    if (!errorText.includes(message)) {
      throw new Error(`Mensagem de erro esperada: "${message}", mas recebeu: "${errorText}"`);
    }
  }
}

module.exports = { LoginPage };
