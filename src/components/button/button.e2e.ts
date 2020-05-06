import { newE2EPage } from '@stencil/core/testing';

describe('wiz-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wiz-button></wiz-button>');

    const element = await page.find('wiz-button');
    expect(element).toHaveClass('hydrated');
  });
});
