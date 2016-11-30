import { AvengersWebappNg2Page } from './app.po';

describe('avengers-webapp-ng2 App', function() {
  let page: AvengersWebappNg2Page;

  beforeEach(() => {
    page = new AvengersWebappNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
