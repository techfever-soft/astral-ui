import { newSpecPage } from '@stencil/core/testing';
import { AstralGridItem } from '../astral-grid-item';

describe('astral-grid-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralGridItem],
      html: `<astral-grid-item></astral-grid-item>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-grid-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-grid-item>
    `);
  });
});
