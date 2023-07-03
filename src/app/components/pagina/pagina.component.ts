import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css'],
})
export class PaginaComponent {
  public nombre!: string | null;
  public apellido!: string | null;
  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this.nombre = this._route.snapshot.paramMap.get('nombre');
    this.apellido = this._route.snapshot.paramMap.get('apellido');
  }
}
