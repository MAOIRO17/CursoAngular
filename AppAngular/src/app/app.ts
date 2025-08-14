import { Component, signal } from '@angular/core';
import { NuevoComponente } from "./nuevo-componente/nuevo-componente";
import { ComponenteEnLinea } from "./componente-en-linea/componente-en-linea";
import { Interpolacion } from "./interpolacion/interpolacion";
import { Padre } from './padre/padre';
import { Hijo } from "./hijo/hijo";
import { MostrarMensaje } from './mostrar-mensaje/mostrar-mensaje';
import { Replicador } from './replicador/replicador';
import { Saludar } from "./saludar/saludar";
import { ComponenteIf } from './componente-if/componente-if';
import { AgregarTarea } from "./agregar-tarea/agregar-tarea";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ComponenteIf, AgregarTarea]
})
export class App {  
  title = "Referencias Locales en Angular"; ;
}
