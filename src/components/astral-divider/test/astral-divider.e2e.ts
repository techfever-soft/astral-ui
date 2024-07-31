import { newE2EPage } from '@stencil/core/testing';

describe('astral-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-divider></astral-divider>');

    const element = await page.find('astral-divider');
    expect(element).toHaveClass('hydrated');
  });
});
