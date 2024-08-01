import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'astral-modal',
  styleUrl: 'astral-modal.scss',
  shadow: false,
})
export class AstralModal {
  @State() isVisible: boolean = false;

  @Prop() modalTitle: string;

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

  render() {
    return (
      <Host>
        <div class="astral-modal-container">
          <slot name="container"></slot>
        </div>
      </Host>
    );
  }
}
