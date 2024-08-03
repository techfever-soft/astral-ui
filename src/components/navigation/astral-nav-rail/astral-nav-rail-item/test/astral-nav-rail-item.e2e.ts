import { newE2EPage } from '@stencil/core/testing';

describe('astral-nav-rail-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-nav-rail-item></astral-nav-rail-item>');

    const element = await page.find('astral-nav-rail-item');
    expect(element).toHaveClass('hydrated');
  });
});
