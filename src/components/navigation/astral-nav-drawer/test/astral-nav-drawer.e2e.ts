import { newE2EPage } from '@stencil/core/testing';

describe('astral-nav-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-nav-drawer></astral-nav-drawer>');

    const element = await page.find('astral-nav-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
