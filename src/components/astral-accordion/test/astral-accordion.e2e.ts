import { newE2EPage } from '@stencil/core/testing';

describe('astral-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-accordion></astral-accordion>');

    const element = await page.find('astral-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
