import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-usuarios.html',
  styleUrls: ['./listado-usuarios.css']
})
export class ListadoUsuarios implements OnInit {
  usuarios: any[] = [];

  constructor(private usuariosService: Usuarios) {}

  ngOnInit() {
    this.usuariosService.obtenerUsuarios().subscribe((data: any[]) => {
      this.usuarios = data;
    });
  }
}
