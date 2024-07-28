import { newE2EPage } from '@stencil/core/testing';

describe('astral-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-button></astral-button>');

    const element = await page.find('astral-button');
    expect(element).toHaveClass('hydrated');
  });
});
