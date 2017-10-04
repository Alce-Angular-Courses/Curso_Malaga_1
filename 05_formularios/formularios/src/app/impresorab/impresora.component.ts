import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Provincia } from './provicias.model';

// Uso de interfaces para definir las propiedades de una clase
// que se utiliza como modelo de datos
// En este caso no se "implementa" el interfaz
// Podría llevarse a un fichhero inedpendiente, exportarse
// y luego importarse en este

// interface Provincia {
//     idProvincia: number;
//     nombre: string;
// }

@Component({
    selector: 'app-impresorab',
    templateUrl: 'impresora.component.html',
    styleUrls: ['./impresora.component.css']
})
export class ImpresorabComponent implements OnInit {

    sName: string;
    aImpresoras: Array<string>;
    impresoraSeleccionada: string;

    print: boolean;	// true si se selecciona imprime
    isClaro: boolean; // true si se selecciona claro

    mostrarFinal: boolean;

    aProvincias: Array<Provincia>;
    provinciaSeleccionada: Provincia;

    constructor() { }

    ngOnInit() {

        this.aImpresoras = ['HP Pagewide Pro 477dw',
            'Epson Stylus SX235W',
            'Lexmark CS310/410',
            'Brother HL-3140CW'];

        this.print = false;
        this.isClaro = false;

        this.mostrarFinal = false;

        this.aProvincias = [
            {idProvincia: 2, nombre: 'Castellón'},
            {idProvincia: 3, nombre: 'Alicante'},
            {idProvincia: 1, nombre: 'Valencia' },
            {idProvincia: 7, nombre: 'Teruel'},
            {idProvincia: 5, nombre: 'Tarragona'},
            new Provincia(8, 'Burgos')
          ];

        this.provinciaSeleccionada = {idProvincia: 0, nombre: ''};

    }

    avisarPrint = () => {
        console.log('Modificada la opción de imprimir con valor :' + this.print);
      }

      avisarProvincia = () => {
        console.log('Provincia Seleccionada');
        console.dir(this.provinciaSeleccionada);
      }

      evviarFormulario() {
        this.mostrarFinal = true;
      }
}
