import { newSpecPage } from '@stencil/core/testing';
import { AstralDivider } from '../astral-divider';

describe('astral-divider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralDivider],
      html: `<astral-divider></astral-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-divider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-divider>
    `);
  });
});
