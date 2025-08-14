import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.html',
  styleUrl: './mostrar-mensaje.css'
})
export class MostrarMensaje {
mensaje='';
resetearMensaje() {
  this.mensaje = '';
}
mostrarMensaje() {
this.mensaje=('Has hecho click');
}

}
