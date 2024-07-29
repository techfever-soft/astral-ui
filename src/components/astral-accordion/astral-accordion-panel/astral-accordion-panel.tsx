import { Component, Element, Host, Prop, h } from '@stencil/core';

import gsap from 'gsap';

@Component({
  tag: 'astral-accordion-panel',
  styleUrl: 'astral-accordion-panel.scss',
  shadow: false,
})
export class AstralAccordionPanel {
  @Element() el: HTMLElement;
  @Prop() index: number;
  @Prop({ mutable: true }) opened: boolean = false;
  @Prop() stroked: boolean = false;
  @Prop() raised: boolean = false;

  togglePanel = () => {
    this.opened = !this.opened;
    const event = new CustomEvent('panelToggle', {
      detail: this.index,
      bubbles: true,
      composed: true,
    });
    this.el.dispatchEvent(event);

    if (this.opened) {
      gsap.to(this.el.querySelector('.content'), {
        height: 'auto',
        duration: 0.3,
        ease: 'power2.inOut',
      });
    } else {
      gsap.to(this.el.querySelector('.content'), {
        height: 0,
        duration: 0.3,
        ease: 'power2.inOut',
      });
    }
  };

  render() {
    return (
      <Host stroked={this.stroked} raised={this.raised}>
        <div class={`panel ${this.stroked ? 'stroked' : ''} ${this.raised ? 'raised' : ''} ${this.opened ? 'opened' : ''}`}>
          <div class="header" onClick={this.togglePanel}>
            <div class="header-content">
              <slot name="header"></slot>
            </div>
            <span class="header-spacer"></span>
            <div class="header-icon">
              <i class="material-icons">keyboard_arrow_right</i>
            </div>
          </div>
          <div class="content">
            <slot name="content"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
