import { newE2EPage } from '@stencil/core/testing';

describe('astral-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-icon></astral-icon>');

    const element = await page.find('astral-icon');
    expect(element).toHaveClass('hydrated');
  });
});
