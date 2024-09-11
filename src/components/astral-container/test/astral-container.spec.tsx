import { newSpecPage } from '@stencil/core/testing';
import { AstralContainer } from '../astral-container';

describe('astral-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralContainer],
      html: `<astral-container></astral-container>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-container>
    `);
  });
});
