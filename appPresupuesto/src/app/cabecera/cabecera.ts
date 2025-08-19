import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  imports: [CommonModule],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css'
})
export class Cabecera {
@Input() presupuestoTotal!: number;
@Input() ingresoTotal!: number;
@Input() retiradaTotal!: number;
@Input() porcentajeTotal!: number;
}
