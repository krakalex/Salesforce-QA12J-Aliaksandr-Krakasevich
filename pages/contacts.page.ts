import { Page } from '@playwright/test';
import BasePage from './base.page';

export default class ContactsPage extends BasePage {
    get contactFileLastNamePlaceHolder() {
        return this.page.locator('records-highlights2 lightning-formatted-name');
    }
    get newContactButton() {
        return this.page.getByRole('button', { name: 'New' });
    }
    get accountNameDropdown() {
        return this.page.getByPlaceholder('Search Accounts...');
    }
    specificContactName(contactName: String) {
        return this.page.locator(`a[data-refid="recordId"][title=${contactName}]`) 
    }
    specificContactActionsDropdown(contactName: String) {
        return this.page.locator(`//a[@data-refid="recordId"][@title='${contactName}']/ancestor::tr/descendant::ul[@class='oneActionsRibbon']`) 
    }
    get contactFileActionsDropDown() {
        return this.page.locator('records-highlights2').getByRole('button', { name: 'Show more actions' })
    }
    get deleteOption() {
        return this.page.getByRole('menuitem', { name: 'Delete' });
    }
    get deleteButton() {
        return this.page.getByRole('button', { name: 'Delete' });
    }

    constructor(page: Page) {
        super(page);
    }

    async getContactFileLastName() {
        return await this.contactFileLastNamePlaceHolder.textContent();
    }
    async clickNewContactButton() {
        await this.newContactButton.click();
    }
    async openSpecificContactActionsDropdown(contactName: String) {
        await this.specificContactName(contactName).locator('xpath=./ancestor::tr/descendant::a[@role="button"]').click();
    }
    async openSpecificContactFile(contactName: String) {
        await this.specificContactName(contactName).click();
    }
    async deleteContact() {
        await this.deleteOption.click();
        await this.deleteButton.click();
    }
}