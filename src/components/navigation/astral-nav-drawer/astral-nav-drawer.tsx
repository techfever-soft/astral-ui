import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'astral-nav-drawer',
  styleUrl: 'astral-nav-drawer.scss',
  shadow: true,
})
export class AstralNavDrawer {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
