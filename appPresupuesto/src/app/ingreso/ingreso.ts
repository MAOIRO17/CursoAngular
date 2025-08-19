import { Injectable } from '@angular/core';
import { Ingreso } from './ingreso.model';
@Injectable({
  providedIn: 'root'
})
export class IngresoService {
  eliminarIngreso(ingreso: Ingreso) {
    const index: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(index, 1);
  }
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 5000),
    new Ingreso('Venta de coche', 15000),
    new Ingreso('Alquiler de apartamento', 1200)
  ];
}
export { Ingreso };

