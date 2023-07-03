import { Component } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent {
  public texto: string;

  constructor() {
    this.texto = 'hola que tal';
  }

  cambiarTitulo = () => {

    this.texto="titulo cambiado"
  };
}
