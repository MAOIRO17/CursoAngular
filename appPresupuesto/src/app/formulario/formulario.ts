import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ingreso, IngresoService } from '../ingreso/ingreso';
import { Retirada, RetiradaService } from '../retirada/retirada';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  tipo: string = 'ingresoOperacion';
  descripcionInput: string | null = null;
  valorInput: number | null = null;
  constructor(private ingresoService: IngresoService, private retiradaService: RetiradaService) { }
  tipoOperacion(evento: Event) {
    const elementoSelect = evento.target as HTMLSelectElement;
    this.tipo = elementoSelect.value;
  }
  agregarValor() {
    if (this.descripcionInput != null && this.valorInput != null) {
      if (this.tipo === 'ingresoOperacion') {
        this.ingresoService.ingresos.push(
          new Ingreso(this.descripcionInput, this.valorInput)
        );
      }
      else {
        this.retiradaService.retiradas.push(
          new Retirada(this.descripcionInput, this.valorInput)
        );
      }
    }
    else {
      alert('Por favor, complete todos los campos.');
    }
    this.descripcionInput = null;
    this.valorInput = null;
  }


}