import { ZnnPage } from './app.po';

describe('znn App', () => {
  let page: ZnnPage;

  beforeEach(() => {
    page = new ZnnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
