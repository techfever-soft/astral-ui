import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'astral-nav-rail-item',
  styleUrl: 'astral-nav-rail-item.scss',
  shadow: false,
})
export class AstralNavRailItem {
  @Prop() icon: string;
  @Prop() label: string;
  @Prop() fontSet: 'material' | 'font-awesome' = 'material';

  render() {
    return (
      <div class="astral-nav-rail-item">
        <astral-icon fontSet={this.fontSet} name={this.icon}></astral-icon>
        <span>{this.label}</span>
      </div>
    );
  }
}
