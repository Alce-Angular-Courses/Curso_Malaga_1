import { BuscarService } from '../buscar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  claveLibro: string;
  aLibros: string[];

  constructor(private buscarService: BuscarService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscarLibros () {
    this.aLibros = this.buscarService.getLibros(this.claveLibro);
    console.log(this.aLibros);
  }
}
