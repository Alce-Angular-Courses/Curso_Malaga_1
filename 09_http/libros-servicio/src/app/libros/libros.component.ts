import { BuscarService } from '../buscar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  url; string;
  claveLibro: string;
  aLibros: string[];

  constructor(public buscarService: BuscarService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscarLibros () {
    this.buscarService.getLibros(this.claveLibro);
    // this.aLibros = 
    // console.log(this.aLibros);
  }
}
