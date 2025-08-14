import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {
private titulo = 'Componente hijo';
// Getter para acceder al título
get mostrarTitulo() {
    return this.titulo;
  }
get getTitulo() {
    return this.titulo;
  }
}
