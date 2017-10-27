import { TestifyFrontPage } from './app.po';

describe('testify-front App', () => {
  let page: TestifyFrontPage;

  beforeEach(() => {
    page = new TestifyFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
