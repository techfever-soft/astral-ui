import { newE2EPage } from '@stencil/core/testing';

describe('astral-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-modal></astral-modal>');

    const element = await page.find('astral-modal');
    expect(element).toHaveClass('hydrated');
  });
});
