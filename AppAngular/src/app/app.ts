import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { Component, LOCALE_ID } from '@angular/core';
import { EjempploPipes } from "./ejempplo-pipes/ejempplo-pipes";
import { Mensaje } from './mensaje';
//Datos locales para el idioma español
registerLocaleData(localeEs, 'es');
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [EjempploPipes],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }]
})
export class App {  
  title = "Ejemplo Pipes en Angular"; 

  mensaje: string;
  constructor(mensajeService: Mensaje) {
    this.mensaje = mensajeService.getMensaje();    
}
}
