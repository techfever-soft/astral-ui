import { newE2EPage } from '@stencil/core/testing';

describe('astral-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-checkbox></astral-checkbox>');

    const element = await page.find('astral-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
