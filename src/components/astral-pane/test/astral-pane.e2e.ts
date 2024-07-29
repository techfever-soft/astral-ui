import { newE2EPage } from '@stencil/core/testing';

describe('astral-pane', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<astral-pane></astral-pane>');

    const element = await page.find('astral-pane');
    expect(element).toHaveClass('hydrated');
  });
});
