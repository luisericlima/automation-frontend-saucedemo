const { expect } = require('@playwright/test');

exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = '[data-test="firstName"]';
    this.lastNameInput = '[data-test="lastName"]';
    this.postalCodeInput = '[data-test="postalCode"]';
    this.continueButton = '[data-test="continue"]';
    this.finishButton = '[data-test="finish"]';
    this.successMessage = '.complete-header';
  }

  async gotoCheckoutStepOne() {
    await this.page.locator('[data-test="checkout"]').click();
    await this.page.waitForURL(/.*checkout-step-one.html/);
  }

  async checkout(firstName, lastName, postalCode) {
    await this.page.locator(this.firstNameInput).waitFor();
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.click(this.continueButton);
    await expect(this.page).toHaveURL(/.*checkout-step-two.html/);
    await this.page.click(this.finishButton);
  }

  async assertSuccessMessage() {
    await expect(this.page).toHaveURL(/.*checkout-complete.html/);
    const message = this.page.locator(this.successMessage);
    await expect(message).toBeVisible();
    await expect(message).toHaveText('Thank you for your order!');
  }
};
