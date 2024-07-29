import { newSpecPage } from '@stencil/core/testing';
import { AstralPane } from '../astral-pane';

describe('astral-pane', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralPane],
      html: `<astral-pane></astral-pane>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-pane>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-pane>
    `);
  });
});
