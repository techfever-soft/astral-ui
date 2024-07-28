import { newE2EPage } from '@stencil/core/testing';

describe('astral-accordion-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-accordion-panel></astral-accordion-panel>');

    const element = await page.find('astral-accordion-panel');
    expect(element).toHaveClass('hydrated');
  });
});
