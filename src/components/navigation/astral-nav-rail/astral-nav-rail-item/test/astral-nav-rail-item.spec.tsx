import { newSpecPage } from '@stencil/core/testing';
import { AstralNavRailItem } from '../astral-nav-rail-item';

describe('astral-nav-rail-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralNavRailItem],
      html: `<astral-nav-rail-item></astral-nav-rail-item>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-nav-rail-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-nav-rail-item>
    `);
  });
});
