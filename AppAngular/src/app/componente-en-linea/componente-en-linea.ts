import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  imports: [],
  template: `
  <h1>{{tituloComponenteInline}}</h1>
    <p>
      Fuente más grande
    </p>
  `,
  styles: `
  h1{
    color: blue;
  }
  p{
    font-size: 20px;
    font-weight: bold;
  }
  `
})
export class ComponenteEnLinea {
tituloComponenteInline = 'Componente en línea';
}
