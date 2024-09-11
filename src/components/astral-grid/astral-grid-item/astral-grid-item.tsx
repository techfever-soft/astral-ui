import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'astral-grid-item',
  styleUrl: 'astral-grid-item.scss',
  shadow: false
})
export class AstralGridItem {
  render() {
    return (
      <Host style={{
        flex: '1',
        boxSizing: 'border-box',
        flexBasis: 'var(--flex-basis, auto)'
      }}>
        <slot></slot>
      </Host>
    );
  }
}
