import { newSpecPage } from '@stencil/core/testing';
import { AstralButton } from '../astral-button';

describe('astral-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralButton],
      html: `<astral-button></astral-button>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-button>
    `);
  });
});
