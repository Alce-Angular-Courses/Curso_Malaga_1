import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input()
  public usuario: string;

  @Output()
  public borrar: EventEmitter<any>;

  constructor() {
    this.borrar = new EventEmitter<any>();
  }

  ngOnInit() {}

  btnBorrar () {
    this.borrar.emit();
    console.log(this.borrar);
  }
}
