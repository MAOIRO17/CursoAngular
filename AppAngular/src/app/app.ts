import { Component, signal } from '@angular/core';
import { NuevoComponente } from "./nuevo-componente/nuevo-componente";
import { ComponenteEnLinea } from "./componente-en-linea/componente-en-linea";
import { Interpolacion } from "./interpolacion/interpolacion";
import { Padre } from './padre/padre';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [NuevoComponente, ComponenteEnLinea, Interpolacion, Padre]
})
export class App {  
  title = signal('Curso Angular');
}
