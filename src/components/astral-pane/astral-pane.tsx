import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'astral-pane',
  styleUrl: 'astral-pane.scss',
  shadow: false,
})
export class AstralPane {
  @Prop() raised: boolean = false;
  @Prop() stroked: boolean = false;

  render() {
    return (
      <Host>
        <slot name="title"></slot>
        <slot name="content"></slot>
      </Host>
    );
  }
}
