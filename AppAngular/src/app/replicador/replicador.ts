import { Component } from '@angular/core';

@Component({
  selector: 'app-replicador',
  imports: [],
  templateUrl: './replicador.html',
  styleUrl: './replicador.css'
})
export class Replicador {
  texto= '';
actualizarTexto($event: Event) {
const input = $event.target as HTMLInputElement;
this.texto = input.value;
}

}
