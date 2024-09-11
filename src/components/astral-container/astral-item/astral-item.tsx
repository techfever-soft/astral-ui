import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'astral-item',
  styleUrl: 'astral-item.scss',
  shadow: false,
})
export class AstralItem {
  @Prop() flex: string = '1'; // Flexibilité
  @Prop() grow: number = 1; // Flex-grow
  @Prop() shrink: number = 1; // Flex-shrink
  @Prop() basis: string = 'auto'; // Flex-basis

  render() {
    return (
      <div
        class="item"
        style={{
          flex: `${this.grow} ${this.shrink} ${this.basis}`,
        }}
      >
        <slot></slot>
      </div>
    );
  }
}
