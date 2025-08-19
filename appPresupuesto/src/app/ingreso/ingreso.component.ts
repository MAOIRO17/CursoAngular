import { Component } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingreso.html',
  styleUrls: ['./ingreso.css']
})
export class IngresoComponent {
  ingresos: Ingreso [] = [];

  constructor(private ingresoService: IngresoService) {
    this.ingresos = this.ingresoService.ingresos;
  }
  eliminarIngreso(ingreso: Ingreso) {
    this.ingresoService.eliminarIngreso(ingreso);
}
}