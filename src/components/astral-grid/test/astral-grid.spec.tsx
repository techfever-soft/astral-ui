import { newSpecPage } from '@stencil/core/testing';
import { AstralGrid } from '../astral-grid';

describe('astral-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralGrid],
      html: `<astral-grid></astral-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-grid>
    `);
  });
});
