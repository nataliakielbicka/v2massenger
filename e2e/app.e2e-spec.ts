import { V2massengerPage } from './app.po';

describe('v2massenger App', function() {
  let page: V2massengerPage;

  beforeEach(() => {
    page = new V2massengerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
