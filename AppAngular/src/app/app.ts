import { Component } from '@angular/core';
import { AgregarTarea } from "./agregar-tarea/agregar-tarea";
import { ComponenteFor } from "./componente-for/componente-for";
import { ComponenteIf } from './componente-if/componente-if';
import { Hijo } from './padre/hijo/hijo';
import { Padre } from './padre/padre';
import { ViewChildComponent } from "./view-child/view-child";
import { Mensaje } from './mensaje';
import { ListadoUsuarios } from "./listado-usuarios/listado-usuarios";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ListadoUsuarios]
})
export class App {  
  title = "Servicios y Observables en Angular"; 

  mensaje: string;
  constructor(mensajeService: Mensaje) {
    this.mensaje = mensajeService.getMensaje();    
}
}
