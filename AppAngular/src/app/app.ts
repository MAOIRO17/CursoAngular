import { Component } from '@angular/core';
import { AgregarTarea } from "./agregar-tarea/agregar-tarea";
import { ComponenteFor } from "./componente-for/componente-for";
import { ComponenteIf } from './componente-if/componente-if';
import { Hijo } from './padre/hijo/hijo';
import { Padre } from './padre/padre';
import { ViewChildComponent } from "./view-child/view-child";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ComponenteIf, AgregarTarea, ComponenteFor, Padre, Hijo, ViewChildComponent]
})
export class App {  
  title = "Decorador ViewChild en Angular"; ;
}
