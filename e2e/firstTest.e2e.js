const {waitFor, element, device, by, expect} = require('detox');

describe('searching a podcast and subscribe, unsubscribe flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have a start text', async () => {
    await expect(element(by.id('start'))).toBeVisible();
  });
  it('should type podcast in input', async () => {
    const typePodcast = 'the';
    const input = element(by.id('input'));
    await input.typeText(typePodcast);
  });
  it('should press on input and render data', async () => {
    const input = element(by.id('input'));
    await input.tapReturnKey();
    waitFor(element(by.id('podcastData'))).toBeVisible();
  });
  it('should press on podcast', async () => {
    const podcastEpisodes = await element(by.id('pisodecount')).atIndex(1);
    await podcastEpisodes.tap();
    waitFor(element(by.id('podcastName'))).toBeVisible();
    waitFor(element(by.id('artist'))).toBeVisible();
    await expect(element(by.id('img'))).toBeVisible();
  });

  it('should subscribe to a podcast', async () => {
    waitFor(element(by.id('subscribe')));
    await element(by.id('subscribe')).tap();
  });
  it('should unsubscribe to a podcast', async () => {
    await expect(element(by.id('searchTab'))).toExist();

    await element(by.id('lib-Tab')).tap();

    await expect(
      element(by.id('podcastItem').withDescendant(by.text('CAFE'))),
    ).toBeVisible();
    await expect(element(by.id('savedPodcast'))).toBeVisible();
  });
  it('should delete a podcast', async () => {
    await element(by.id('removePodcast')).atIndex(0).tap();
    await element(by.id('searchTab')).tap();
  });
});
