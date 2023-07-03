import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
})
export class PruebaComponent {
  public mostrarPelicula: boolean;

  constructor() {
    this.mostrarPelicula = true;
  }

  mostrarOcultarPeliculas = () => {
    this.mostrarPelicula = !this.mostrarPelicula;
  };
}
