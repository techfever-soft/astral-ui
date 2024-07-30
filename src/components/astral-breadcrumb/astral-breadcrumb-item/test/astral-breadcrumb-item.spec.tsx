import { newSpecPage } from '@stencil/core/testing';
import { AstralBreadcrumbItem } from '../astral-breadcrumb-item';

describe('astral-breadcrumb-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralBreadcrumbItem],
      html: `<astral-breadcrumb-item></astral-breadcrumb-item>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-breadcrumb-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-breadcrumb-item>
    `);
  });
});
