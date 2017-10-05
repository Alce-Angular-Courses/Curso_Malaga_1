import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BuscarService {

  url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';

  aLibros = [];
  constructor(private http: Http) { }

  getLibros (clave) {
    return this.http.get(this.url + clave).subscribe(
      response => {
        const data = response.json();
        for (let i = 0; i < data.items.length; i++) {
          const bookTitle = data.items[i].volumeInfo.title;
          this.aLibros.push(bookTitle);
          }
        },
      error => console.log(error)
    );
  }
}
