import { newE2EPage } from '@stencil/core/testing';

describe('astral-nav-rail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-nav-rail></astral-nav-rail>');

    const element = await page.find('astral-nav-rail');
    expect(element).toHaveClass('hydrated');
  });
});
