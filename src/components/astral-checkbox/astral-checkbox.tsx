import { Component, Element, Host, Prop, h } from '@stencil/core';

import { AstralThemeColor } from '../../components';
import { MDCRipple } from '@material/ripple';

@Component({
  tag: 'astral-checkbox',
  styleUrl: 'astral-checkbox.scss',
  shadow: false,
})
export class AstralCheckbox {
  @Prop() color: AstralThemeColor = 'primary';
  @Prop() checked: boolean = false;
  @Prop() indeterminate: boolean = false;

  @Element() el: HTMLElement;

  private randomId: string = Math.random().toString().slice(2, 9);

  componentDidLoad() {
    new MDCRipple(this.el.querySelector('.checkbox-ripple'));
  }

  render() {
    return (
      <Host>
        <div class={`checkbox-container checkbox-${this.color} ${this.indeterminate ? 'checkbox-indeterminate' : ''}`}>
          <input type="checkbox" class="checkbox-input" id={`checkbox-${this.randomId}`} checked={this.checked} />
          <label htmlFor={`checkbox-${this.randomId}`} class="checkbox-custom">
            <i class="material-icons">{this.indeterminate ? 'remove' : 'check'}</i>
          </label>
        </div>
        <label htmlFor={`checkbox-${this.randomId}`} class="checkbox-label">
          <slot />
        </label>
      </Host>
    );
  }
}
