import { browser, by, element } from 'protractor';

describe('App', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject: any = browser.getTitle();
    let result: string = 'Angular2 Sonny Webpack';

    expect(subject).toEqual(result);
  });

  it('should have header', () => {
    let subject: any = element(by.css('h1')).isPresent();
    let result: boolean = true;

    expect(subject).toEqual(result);
  });

  it('should have <home>', () => {
    let subject: any = element(by.css('sg-app sg-home')).isPresent();
    let result: boolean  = true;

    expect(subject).toEqual(result);
  });
});
