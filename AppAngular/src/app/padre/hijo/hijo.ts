import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {
  @Output() avisarPadre= new EventEmitter<string>();
enviarMensaje() {
this.avisarPadre.emit("Mensaje desde Hijo");
}
}
