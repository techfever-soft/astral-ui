import { newSpecPage } from '@stencil/core/testing';
import { AstralLayout } from '../astral-layout';

describe('astral-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralLayout],
      html: `<astral-layout></astral-layout>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-layout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-layout>
    `);
  });
});
