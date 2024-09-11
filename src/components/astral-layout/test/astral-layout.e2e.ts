import { newE2EPage } from '@stencil/core/testing';

describe('astral-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-layout></astral-layout>');

    const element = await page.find('astral-layout');
    expect(element).toHaveClass('hydrated');
  });
});
