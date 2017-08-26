import { AngularGalleryPage } from './app.po';

describe('angular-gallery App', () => {
  let page: AngularGalleryPage;

  beforeEach(() => {
    page = new AngularGalleryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
