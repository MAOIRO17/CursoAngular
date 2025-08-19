import { Component } from "@angular/core";
import { Cabecera } from "./cabecera/cabecera";
import { Formulario } from "./formulario/formulario";
import { IngresoService } from "./ingreso/ingreso";
import { Ingreso } from "./ingreso/ingreso.model";
import { RetiradaService } from "./retirada/retirada";
import { RetiradaComponent } from "./retirada/retirada.component";
import { IngresoComponent } from "./ingreso/ingreso.component";
import { Retirada } from "./retirada/retirada.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Cabecera, Formulario, IngresoComponent, RetiradaComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  ingresos: Ingreso[] = [];
  retiradas: Retirada[] = [];

  constructor(
    private ingresoService: IngresoService,
    private retiradaService: RetiradaService
  ) {
    this.ingresos = this.ingresoService.ingresos;
    this.retiradas = this.retiradaService.retiradas;
  }

  getTotalIngresos(): number {
    return this.ingresos.reduce((acc, ingreso) => acc + ingreso.valor, 0);
  }

  getTotalRetiradas(): number {
    return this.retiradas.reduce((acc, retirada) => acc + retirada.valor, 0);
  }

  getPorcentaje(): number {
    const ingresos = this.getTotalIngresos();
    return ingresos > 0 ? (this.getTotalRetiradas() / ingresos) * 100 : 0;
  }

  getPresupuesto(): number {
    return this.getTotalIngresos() - this.getTotalRetiradas();
  }
}
