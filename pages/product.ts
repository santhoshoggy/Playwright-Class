import { Locator } from "@playwright/test"; 
import { LoginPage } from "./login";
export class ProductPage extends LoginPage {

  readonly productTitle: Locator;
  readonly productLink: Locator;
 

  constructor(page: any) {
    super(page);
  
    this.productTitle = page.getByText('Products', { exact: true });
    this.productLink = page.getByText('Sauce Labs Backpack', { exact: true });
  }
  async clickOnProduct(): Promise<void> {
    await this.productLink.click();
  } 
}