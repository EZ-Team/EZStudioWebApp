import { EZStudioWebAppRoutingPage } from './app.po';

describe('ezstudio-web-app-routing App', () => {
  let page: EZStudioWebAppRoutingPage;

  beforeEach(() => {
    page = new EZStudioWebAppRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
