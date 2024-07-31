import { newSpecPage } from '@stencil/core/testing';
import { AstralIcon } from '../astral-icon';

describe('astral-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralIcon],
      html: `<astral-icon></astral-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-icon>
    `);
  });
});
