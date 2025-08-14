import { Component } from '@angular/core';
import { Producto } from '../Producto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  standalone: true, // ✅ standalone
  imports: [CommonModule, FormsModule], 
  templateUrl: './listado-productos.html',
  styleUrls: ['./listado-productos.css']
})
export class ListadoProductos {
  productos: Producto[] = [
    new Producto('Camiseta Angular', 20),
    new Producto('Pantalón React', 30),
    new Producto('Zapatos Vue', 50)
  ];

  descripcionInput: string = '';
  precioInput: number | null = null;

  agregarProducto() {
    if (
      this.descripcionInput.trim() === '' ||
      this.precioInput == null ||
      this.precioInput <= 0
    ) {
      alert('Por favor, ingrese una descripción válida y un precio mayor a 0.');
      return;
    }

    const nuevoProducto = new Producto(this.descripcionInput, this.precioInput);
    this.productos.push(nuevoProducto);
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
