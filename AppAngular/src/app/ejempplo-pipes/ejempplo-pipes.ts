import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejempplo-pipes',
  imports: [CommonModule],
  templateUrl: './ejempplo-pipes.html',
  styleUrl: './ejempplo-pipes.css'
})
export class EjempploPipes {
empleados = [
    { nombre: 'Juan', fechaNacimiento:new Date("2014-09-06"), sueldo: 3000 },
    { nombre: 'Ana', fechaNacimiento:new Date("2002-07-11"), sueldo: 2500 },
    { nombre: 'Luis', fechaNacimiento:new Date("2009-12-26"), sueldo: 3500 }
  ];

}
