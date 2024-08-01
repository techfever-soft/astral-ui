import { newSpecPage } from '@stencil/core/testing';
import { AstralModal } from '../astral-modal';

describe('astral-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralModal],
      html: `<astral-modal></astral-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-modal>
    `);
  });
});
