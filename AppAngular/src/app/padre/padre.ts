import { Component } from '@angular/core';
import { Hijo } from "./hijo/hijo";


@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})
export class Padre {
  mensajePadre: string = "Hola desde el padre";

}
