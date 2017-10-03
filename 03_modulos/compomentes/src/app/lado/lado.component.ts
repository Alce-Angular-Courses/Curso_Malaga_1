import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lado',
    template: `
    <div class="">
     <p>Esto irá en un lateral</p>
    </div>
    `
})

export class LadoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
