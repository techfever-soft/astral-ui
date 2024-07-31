import { Component, Host, Prop, h } from '@stencil/core';

import { AstralThemeColor } from '../../components';

@Component({
  tag: 'astral-icon',
  styleUrl: 'astral-icon.scss',
  shadow: true,
})
export class AstralIcon {
  @Prop() name: string;
  @Prop() size: string;
  @Prop() color: AstralThemeColor;
  @Prop() fontSet: 'material' | 'font-awesome' = 'material';

  render() {
    return <Host>{this.fontSet === 'material' ? <i class="material-icons">{this.name}</i> : <i class={`fa fa-${this.name}`}></i>}</Host>;
  }
}
