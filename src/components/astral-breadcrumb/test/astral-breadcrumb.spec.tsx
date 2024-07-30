import { newSpecPage } from '@stencil/core/testing';
import { AstralBreadcrumb } from '../astral-breadcrumb';

describe('astral-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralBreadcrumb],
      html: `<astral-breadcrumb></astral-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-breadcrumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-breadcrumb>
    `);
  });
});
