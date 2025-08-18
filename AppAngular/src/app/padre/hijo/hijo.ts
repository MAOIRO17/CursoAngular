import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {
 mensaje: string="Mensaje desde hijo";
 cambiarMensaje(nuevoMensaje: string){
  this.mensaje=nuevoMensaje;
 }
}

