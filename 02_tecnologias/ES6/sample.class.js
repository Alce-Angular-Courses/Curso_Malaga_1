// Ejemplo de código en ES6

class Libro {
    constructor(tematica, paginas) {
        this.tematica = tematica  
        this.paginas = paginas
    }
}

class LibroTecnico extends Libro {

	constructor(tematica, paginas, precio) {
		super(tematica, paginas);
		this.capitulos = [];
		this.precio = precio;
		// ...
	}
	
	precioFinal(pIva = 16) {
		return this.precio * (1 + pIva/100)
	}
}

let libro1 = new LibroTecnico("Informatica", 250, 30)
console.dir(libro1)
console.dir(libro1.precioFinal())
console.dir("En Canarias : ")
console.dir(libro1.precioFinal(0))

