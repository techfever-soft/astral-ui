import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'astral-nav-bar',
  styleUrl: 'astral-nav-bar.scss',
  shadow: true,
})
export class AstralNavBar {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
