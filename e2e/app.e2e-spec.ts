import { DepInjService3Page } from './app.po';

describe('dep-inj-service3 App', function() {
  let page: DepInjService3Page;

  beforeEach(() => {
    page = new DepInjService3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
