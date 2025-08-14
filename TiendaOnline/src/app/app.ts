import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoProductos } from "./listado-productos/listado-productos";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListadoProductos,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = ('Tienda Online');
}
