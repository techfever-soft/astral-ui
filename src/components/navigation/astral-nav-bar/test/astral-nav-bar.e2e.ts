import { newE2EPage } from '@stencil/core/testing';

describe('astral-nav-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-nav-bar></astral-nav-bar>');

    const element = await page.find('astral-nav-bar');
    expect(element).toHaveClass('hydrated');
  });
});
