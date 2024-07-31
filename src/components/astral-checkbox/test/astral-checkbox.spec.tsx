import { newSpecPage } from '@stencil/core/testing';
import { AstralCheckbox } from '../astral-checkbox';

describe('astral-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AstralCheckbox],
      html: `<astral-checkbox></astral-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <astral-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </astral-checkbox>
    `);
  });
});
