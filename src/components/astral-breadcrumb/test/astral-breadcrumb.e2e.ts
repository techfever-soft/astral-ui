import { newE2EPage } from '@stencil/core/testing';

describe('astral-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-breadcrumb></astral-breadcrumb>');

    const element = await page.find('astral-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
