import { Component, Element, Prop, h } from '@stencil/core';

import { AstralThemeColor } from '../../utils/types/theme.types';

@Component({
  tag: 'astral-accordion',
  styleUrl: 'astral-accordion.scss',
  shadow: false,
})
export class AstralAccordion {
  @Prop() openedIndex: number = null;
  @Prop() multiple: boolean = false;
  @Prop() color: AstralThemeColor = 'transparent';

  @Element() el: HTMLElement;

  handlePanelToggle = (event: CustomEvent) => {
    const index = event.detail;
    const panels = this.el.querySelectorAll('astral-accordion-panel');
    panels.forEach((panel, i) => {
      if (i !== index) {
        panel.opened = false;
      }
    });
  };

  render() {
    return <slot></slot>;
  }
}
