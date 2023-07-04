import { Component } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent {
  public texto: string;
  public peliculas:Array<any>;

  constructor() {
    this.texto = 'hola que tal';
    this.peliculas=[
      {title: "Star Wars IV", image:"https://m.media-amazon.com/images/I/81aA7hEEykL._AC_UF1000,1000_QL80_.jpg"},
      {title: "Star Wars V", image:"https://m.media-amazon.com/images/I/91eOgodm4nL._AC_UF1000,1000_QL80_.jpg"},
      {title: "Star Wars VI", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPQUMsWAY1ITLziual7yYeBW77wjvSeElqw28kDeXtc6PcXg_TT_vB4GDZu90MStjxx0&usqp=CAU"},
    ]
  }

  cambiarTitulo = () => {

    this.texto="titulo cambiado"
  };
}
