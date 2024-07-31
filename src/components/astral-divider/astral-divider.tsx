import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'astral-divider',
  styleUrl: 'astral-divider.scss',
  shadow: false,
})
export class AstralDivider {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
