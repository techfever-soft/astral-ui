import { newSpecPage } from '@stencil/core/testing';
import { AstralNavBar } from '../astral-nav-bar';

describe('astral-nav-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralNavBar],
      html: `<astral-nav-bar></astral-nav-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-nav-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-nav-bar>
    `);
  });
});
