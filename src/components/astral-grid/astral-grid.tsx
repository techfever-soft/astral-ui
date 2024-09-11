import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'astral-grid',
  styleUrl: 'astral-grid.scss',
  shadow: false,
})
export class AstralGrid {
  @Prop() direction: 'row' | 'column' = 'row';
  @Prop() justify: 'start' | 'center' | 'space-between' | 'space-around' = 'start';
  @Prop() align: 'start' | 'center' | 'end' = 'start';
  @Prop() spacing: string = '24px'; // Espacement entre les éléments
  @Prop() columns: number = 3; // Nombre de colonnes

  // Méthode pour calculer la largeur des items en fonction du nombre de colonnes
  private calculateBasis(): string {
    const gap = parseInt(this.spacing);
    return `calc((100% - ${gap * (this.columns - 1)}px) / ${this.columns})`;
  }

  render() {
    const basis = this.calculateBasis();

    return (
      <Host
        style={{
          display: 'flex',
          flexDirection: this.direction,
          justifyContent: this.justify,
          alignItems: this.align,
          gap: this.spacing,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ '--flex-basis': basis }}></div>
      </Host>
    );
  }
}
