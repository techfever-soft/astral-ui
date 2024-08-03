import { Component, Element, Host, Method, Prop, State, h } from '@stencil/core';

import gsap from 'gsap';

@Component({
  tag: 'astral-modal',
  styleUrl: 'astral-modal.scss',
  shadow: false,
})
export class AstralModal {
  @State() isVisible: boolean = false;
  @Element() el: HTMLElement;

  @Prop() modalId: string;

  @Method()
  async open() {
    this.isVisible = true;
    const modal = this.el.querySelector('div[slot="container"]');
    this.el.style.display = 'flex';
    gsap.fromTo(this.el, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.fromTo(modal, { scale: 0 }, { scale: 1, duration: 0.3 });
  }

  @Method()
  async close() {
    const modal = this.el.querySelector('div[slot="container"]');
    gsap.to(this.el, {
      opacity: 0,
      duration: 0.3,
    });
    gsap.to(modal, {
      scale: 0,
      onComplete: () => {
        this.isVisible = false;
        this.el.style.display = 'none';
      },
    });
  }

  handleOverlayClick(event: MouseEvent) {
    if (event.target === this.el) {
      this.close();
    }
  }

  render() {
    return (
      <Host class={{ 'is-visible': this.isVisible }} onClick={(event) => this.handleOverlayClick(event)}>
        <div class="astral-modal-container">
          <slot name="container"></slot>
        </div>
      </Host>
    );
  }
}
