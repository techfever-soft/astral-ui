import { Component, Element, Prop, State, h } from '@stencil/core';

import { AstralThemeColor } from '../../components';

@Component({
  tag: 'astral-breadcrumb',
  styleUrl: 'astral-breadcrumb.scss',
  shadow: false,
})
export class AstralBreadcrumb {
  @Prop() separator: string = '/'; // Valeur par défaut
  @Prop() color: AstralThemeColor = 'primary';
  @Element() el: HTMLElement;

  @State() currentSeparator: string = '/'; // Valeur interne à mettre à jour

  private observer: MutationObserver;

  componentDidLoad() {
    this.updateSeparatorContent();
    this.updateItems();
    
    // Observer pour les changements dans le slot
    this.observer = new MutationObserver(() => {
      this.updateSeparatorContent();
    });
    const separatorSlot = this.el.querySelector('slot[name="separator"]') as HTMLSlotElement;
    if (separatorSlot) {
      this.observer.observe(separatorSlot, { childList: true });
    }
  }

  disconnectedCallback() {
    // Déconnexion de l'observateur lorsque le composant est détruit
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private updateSeparatorContent() {
    const separatorSlot = this.el.querySelector('slot[name="separator"]') as HTMLSlotElement;
    let separatorContent = this.separator; // Valeur par défaut

    if (separatorSlot) {
      const slotNodes = separatorSlot.assignedNodes({ flatten: true });
      if (slotNodes.length > 0 && slotNodes[0].nodeType === Node.TEXT_NODE) {
        separatorContent = slotNodes[0].textContent.trim();
      }
    }

    this.currentSeparator = separatorContent;
    this.updateItems();
  }

  private updateItems() {
    const items = Array.from(this.el.querySelectorAll('astral-breadcrumb-item'));
    items.forEach((item, index) => {
      if (index < items.length - 1) {
        item.setAttribute('separator-content', this.currentSeparator);
        item.setAttribute('color', this.color);
      } else {
        item.removeAttribute('separator-content');
      }
    });
  }

  render() {
    return (
      <nav aria-label="breadcrumb">
        <slot></slot>
        <div style={{ display: 'none' }}>
          <slot name="separator"> {this.separator} </slot>
        </div>
      </nav>
    );
  }
}
