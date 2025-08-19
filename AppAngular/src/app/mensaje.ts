import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Mensaje {
  private mensaje: string = "Mensaje inicial de Servicios";
  constructor() { }

  getMensaje(): string {
    return this.mensaje;
  }
}
