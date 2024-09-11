import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'astral-layout',
  styleUrl: 'astral-layout.scss',
  shadow: true,
})
export class AstralLayout {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
