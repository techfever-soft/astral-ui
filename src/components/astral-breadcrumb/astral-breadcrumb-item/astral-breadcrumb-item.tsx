import { Component, Element, Prop, h } from '@stencil/core';

import { AstralThemeColor } from '../../../components';

@Component({
  tag: 'astral-breadcrumb-item',
  styleUrl: 'astral-breadcrumb-item.scss',
  shadow: false,
})
export class AstralBreadcrumbItem {
  @Prop() href?: string;
  @Prop() color?: AstralThemeColor;
  @Prop() separatorContent: string = '';
  @Prop() active: boolean = false;
  @Prop() disabled: boolean = false;
  
  @Element() el: HTMLElement;

  componentWillLoad() {
    const parent = this.el.closest('astral-breadcrumb');
    if (parent) {
      this.color = parent.getAttribute('color') as AstralThemeColor;
    }
  }

  render() {
    return (
      <div class="breadcrumb-item">
        {this.href ? (
          <a href={this.href}>
            {this.active ? (
              <astral-button color={this.color} disabled={this.disabled}>
                <slot />
              </astral-button>
            ) : (
              <astral-button disabled={this.disabled}>
                <slot />
              </astral-button>
            )}
          </a>
        ) : (
          <span>
            {this.active ? (
              <astral-button color={this.color} disabled={this.disabled}>
                <slot />
              </astral-button>
            ) : (
              <astral-button disabled={this.disabled}>
                <slot />
              </astral-button>
            )}
          </span>
        )}
        {this.separatorContent && <span class="separator">{this.separatorContent}</span>}
      </div>
    );
  }
}
