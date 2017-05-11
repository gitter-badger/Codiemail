import { CodiemailPage } from './app.po';

describe('codiemail App', () => {
  let page: CodiemailPage;

  beforeEach(() => {
    page = new CodiemailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
