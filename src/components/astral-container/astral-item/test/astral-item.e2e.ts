import { newE2EPage } from '@stencil/core/testing';

describe('astral-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-item></astral-item>');

    const element = await page.find('astral-item');
    expect(element).toHaveClass('hydrated');
  });
});
