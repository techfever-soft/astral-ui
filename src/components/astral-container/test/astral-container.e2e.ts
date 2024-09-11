import { newE2EPage } from '@stencil/core/testing';

describe('astral-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-container></astral-container>');

    const element = await page.find('astral-container');
    expect(element).toHaveClass('hydrated');
  });
});
