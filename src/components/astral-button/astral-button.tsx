import { Component, Element, Prop, h } from '@stencil/core';

import { AstralThemeColor } from '../../utils/types/theme.types';
import { MDCRipple } from '@material/ripple';

@Component({
  tag: 'astral-button',
  styleUrl: 'astral-button.scss',
  shadow: false,
})
export class AstralButton {
  @Element() el: HTMLElement;

  @Prop() color: AstralThemeColor = 'transparent';
  @Prop() raised: boolean = false;
  @Prop() fab: boolean = false;
  @Prop() extendedfab: boolean = false;
  @Prop() stroked: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() icon: boolean = false;

  componentDidLoad() {
    const button = this.el.querySelector('button') as HTMLElement;

    if (button) {
      new MDCRipple(button);

      if (this.color) {
        button.setAttribute('color', this.color);
      }
      if (this.raised) {
        button.setAttribute('raised', '');
      }
      if (this.fab) {
        button.setAttribute('fab', '');
      }
      if (this.extendedfab) {
        button.setAttribute('extendedfab', '');
      }
      if (this.stroked) {
        button.setAttribute('stroked', '');
      }
      if (this.icon) {
        button.setAttribute('icon', '');
      }
    }
  }

  render() {
    return (
      <button disabled={this.disabled}>
        <slot></slot>
      </button>
    );
  }
}
