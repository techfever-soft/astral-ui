import { newSpecPage } from '@stencil/core/testing';
import { AstralItem } from '../astral-item';

describe('astral-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralItem],
      html: `<astral-item></astral-item>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-item>
    `);
  });
});
