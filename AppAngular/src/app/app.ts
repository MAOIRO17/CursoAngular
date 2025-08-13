import { Component, signal } from '@angular/core';
import { NuevoComponente } from "./nuevo-componente/nuevo-componente";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [NuevoComponente]
})
export class App {
  title = signal('Hola Mundo');
}
