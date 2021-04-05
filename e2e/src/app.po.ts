import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getDashboardTitle(): Promise<string> {
    return element(by.css('.dashboard-title')).getText();
  }

  async getHeaderContainer(): Promise<any> {
    return element(by.css('.header-container'));
  }

  async getAsideMenu(): Promise<any> {
    return element(by.css('.menu-container'));
  }

  async getDayEventContainer(): Promise<any> {
    return element(by.css('.day-container'));
  }

  async getDateContainer(): Promise<any> {
    return element(by.css('.date-container'));
  }

  async getEventsContainer(): Promise<any> {
    return element(by.css('.events-container'));
  }

  getEvents(): ElementArrayFinder {
    return element.all(by.css('.event'));
  }

  getModalContainer(): ElementFinder {
    return element(by.css('.modal-container'));
  }

  getCloseIconModal(): ElementFinder {
    return element(by.css('.close'));
  }
}
