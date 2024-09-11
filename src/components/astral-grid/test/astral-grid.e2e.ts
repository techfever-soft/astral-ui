import { newE2EPage } from '@stencil/core/testing';

describe('astral-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-grid></astral-grid>');

    const element = await page.find('astral-grid');
    expect(element).toHaveClass('hydrated');
  });
});
