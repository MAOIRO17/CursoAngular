import { Component, signal } from '@angular/core';
import { NuevoComponente } from "./nuevo-componente/nuevo-componente";
import { ComponenteEnLinea } from "./componente-en-linea/componente-en-linea";
import { Interpolacion } from "./interpolacion/interpolacion";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [NuevoComponente, ComponenteEnLinea, Interpolacion]
})
export class App {  
  title = signal('Hola Mundo');
}
