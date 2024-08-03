import { newSpecPage } from '@stencil/core/testing';
import { AstralNavDrawer } from '../astral-nav-drawer';

describe('astral-nav-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralNavDrawer],
      html: `<astral-nav-drawer></astral-nav-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-nav-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-nav-drawer>
    `);
  });
});
