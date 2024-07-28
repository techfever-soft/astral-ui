import { newSpecPage } from '@stencil/core/testing';
import { AstralAccordion } from '../astral-accordion';

describe('astral-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralAccordion],
      html: `<astral-accordion></astral-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-accordion>
    `);
  });
});
