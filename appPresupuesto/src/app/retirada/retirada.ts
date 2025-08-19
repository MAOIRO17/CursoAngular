import { Injectable } from '@angular/core';
import { Retirada } from './retirada.model';
@Injectable({
  providedIn: 'root'
})
export class RetiradaService {
  eliminarRetirada(retirada: Retirada) {
    const index = this.retiradas.indexOf(retirada);
    this.retiradas.splice(index, 1);
  }
  retiradas: Retirada[] = [
    new Retirada('Compra de supermercado', 200),
    new Retirada('Pago de servicios', 150),
    new Retirada('Mantenimiento del coche', 300)
  ];
}
export { Retirada };

