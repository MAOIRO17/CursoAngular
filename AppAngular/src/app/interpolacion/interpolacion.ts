import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.html',
  styleUrl: './interpolacion.css'
})
export class Interpolacion {
  titulo = 'Interpolación en Angular';
  usuario = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 30
  };
  saludar() {
    return `Hola, ${this.usuario.nombre} ${this.usuario.apellido}`;
  }

}
