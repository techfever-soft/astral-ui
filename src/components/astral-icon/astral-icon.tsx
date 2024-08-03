import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'astral-icon',
  styleUrl: 'astral-icon.scss',
  shadow: false,
})
export class AstralIcon {
  @Prop() name: string;
  @Prop() fontSet: 'material' | 'font-awesome' = 'material';

  render() {
    return <Host>{this.fontSet === 'material' ? <i class="material-icons">{this.name}</i> : <i class={`fa fa-${this.name}`}></i>}</Host>;
  }
}
