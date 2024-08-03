import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'astral-nav-rail',
  styleUrl: 'astral-nav-rail.scss',
  shadow: false,
})
export class AstralNavRail {
  @Prop() color: string = 'primary';
  @Element() el: HTMLElement;

  render() {
    return (
      <Host>
        <nav class={`astral-nav-rail ${this.color}`}>
          <slot></slot>
        </nav>
      </Host>
    );
  }
}
