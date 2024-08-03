import { newSpecPage } from '@stencil/core/testing';
import { AstralNavRail } from '../astral-nav-rail';

describe('astral-nav-rail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralNavRail],
      html: `<astral-nav-rail></astral-nav-rail>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-nav-rail>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-nav-rail>
    `);
  });
});
