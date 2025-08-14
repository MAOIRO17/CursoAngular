import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-for',
  imports: [],
  templateUrl: './componente-for.html',
  styleUrl: './componente-for.css'
})
export class ComponenteFor {
tareas: string[] = [
  'Hacer la compra',
  'Limpiar la casa',
  'Estudiar Angular',
  'Preparar la cena'
];
agregarTarea(nuevaTarea: string) {
  if (nuevaTarea) {
    this.tareas.push(nuevaTarea);
  } }
}
