import { newE2EPage } from '@stencil/core/testing';

describe('astral-breadcrumb-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-breadcrumb-item></astral-breadcrumb-item>');

    const element = await page.find('astral-breadcrumb-item');
    expect(element).toHaveClass('hydrated');
  });
});
