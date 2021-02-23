import { SGATemplatePage } from './app.po';

describe('SGA App', function() {
  let page: SGATemplatePage;

  beforeEach(() => {
    page = new SGATemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
