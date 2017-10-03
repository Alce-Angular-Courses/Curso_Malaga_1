import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {

  sName: string;
  constructor() { }

  ngOnInit() {
    this.sName = 'Pepe';
  }

}
