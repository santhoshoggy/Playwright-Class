import { Locator } from "@playwright/test"; 
import { LoginPage } from "./login";
export class ProductPage extends LoginPage {

  readonly productTitle: Locator;
  readonly productLink: Locator;
  readonly logoutButton: Locator;
  readonly openMenuButton: Locator;
 

  constructor(page: any) {
    super(page);
  
    this.productTitle = page.getByText('Products', { exact: true });
    this.productLink = page.getByText('Sauce Labs Backpack', { exact: true });
    this.logoutButton = page.getByText('Logout', { exact: true });
    this.openMenuButton = page.getByRole('button', { name: 'Open Menu' });
  }
  async clickOnProduct(): Promise<void> {
    await this.productLink.click();
  } 
  async logout(): Promise<void> {
    await this.openMenuButton.click();
    await this.logoutButton.click();

  }
}