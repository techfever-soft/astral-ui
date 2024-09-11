import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'astral-container',
  styleUrl: 'astral-container.scss',
  shadow: false,
})
export class AstralContainer {
  @Prop() direction: 'row' | 'column' = 'row';
  @Prop() wrap: 'nowrap' | 'wrap' = 'wrap';
  @Prop() justify: 'start' | 'center' | 'space-between' | 'space-around' = 'start';
  @Prop() align: 'start' | 'center' | 'end' = 'start';
  @Prop() spacing: string = '0px'; // Espace entre les éléments
  @Prop() padding: string = '0px'; // Padding intérieur

  render() {
    return (
      <Host style={{
        display: 'flex',
        flexDirection: this.direction,
        flexWrap: this.wrap,
        justifyContent: this.justify,
        alignItems: this.align,
        gap: this.spacing,
        padding: this.padding
      }}>
        <slot></slot>
      </Host>
    );
  }
}
