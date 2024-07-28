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
      <Host stroked={this.stroked}>
        <div class={`panel ${this.stroked ? 'stroked' : ''} ${this.opened ? 'opened' : ''}`}>
          <div class="header" onClick={this.togglePanel}>
            <slot name="header"></slot>
          </div>
          <div class="content">
            <slot name="content"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
