import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display header', async () => {
    await page.navigateTo();
    expect(await page.getHeaderContainer()).toBeTruthy();
  });

  it('should display aside menu', async () => {
    await page.navigateTo();
    expect(await page.getAsideMenu()).toBeTruthy();
  });

  it('should display dashboard title', async () => {
    await page.navigateTo();
    expect(await page.getDashboardTitle()).toEqual('Dashboard');
  });

  it('should display day container', async () => {
    await page.navigateTo();
    expect(await page.getDayEventContainer()).toBeTruthy();
  });

  it('should show modal when user clicks on day event', async () => {
    await page.navigateTo();
    const events = await page.getEvents();
    await events[0].click();
    expect(await page.getModalContainer()).toBeTruthy();
  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
