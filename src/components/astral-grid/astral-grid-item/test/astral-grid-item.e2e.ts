import { newE2EPage } from '@stencil/core/testing';

describe('astral-grid-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-grid-item></astral-grid-item>');

    const element = await page.find('astral-grid-item');
    expect(element).toHaveClass('hydrated');
  });
});
