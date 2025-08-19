import { Component, Input } from '@angular/core';
import { Retirada } from './retirada.model';
import { RetiradaService } from './retirada';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-retirada',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './retirada.html',
  styleUrls: ['./retirada.css']
})
export class RetiradaComponent {
  retiradas: Retirada[] = [];
  @Input() ingresoTotal!: number;

  constructor(private retiradaService: RetiradaService) {
    this.retiradas = this.retiradaService.retiradas;

  }

  eliminarRetirada(retirada: Retirada) {
    this.retiradaService.eliminarRetirada(retirada);
  }

  calcularPorcentaje(retirada: Retirada): number {
    return (retirada.valor / this.ingresoTotal) * 100;
  }
}
