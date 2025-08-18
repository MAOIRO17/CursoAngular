import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  styleUrl: './app.css',
  template: `<h1>{{ title }}</h1>`
})
export class App {
  title = ('Tienda Online');
}
