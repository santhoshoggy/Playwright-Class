import { type Locator, type Page } from '@playwright/test';
import { env } from 'node:process';
import testdata from '../testdata/testdata.json'


export class LoginPage {

  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async goto(): Promise<void> {
    
    await this.page.goto(process.env.BASE_URL || 'https://www.saucedemo.com');
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(env.USERNAME || username);
    
    await this.usernameInput.fill(testdata.validuser.username);

    await this.passwordInput.fill(env.PASSWORD || password);
    await this.loginButton.click();
  }
   async ADIMlogin(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(env.USERNAME || username);
    await this.passwordInput.fill(env.PASSWORD || password);
    await this.loginButton.click();
  }
}