import { newSpecPage } from '@stencil/core/testing';
import { AstralAccordionPanel } from '../astral-accordion-panel';

describe('astral-accordion-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralAccordionPanel],
      html: `<astral-accordion-panel></astral-accordion-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-accordion-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-accordion-panel>
    `);
  });
});
