// ejemplo de clase en TypeScript
interface Usuario {
    id: number,
    name: string,
    direccion: {calle : string,
                 num : number,
                 zip: string}
    formación: Array<string>
}

export class Empleado {

    private nombre: string;
    private salario: number;
    public aUsuarios: Array<string>;
    public aDatos: string[];
    public oVacio: {}; // sería un absurdo, sin propiedades
    public oUser: Usuario;

    constructor(nombre: string, salario: number) {
        this.nombre = nombre;
        this.salario = salario;
    }

    getNombre() {
        return this.nombre;
    }
    
    toString() {
        return "Nombre:" + this.nombre +
            ", Salario:" + this.salario;
    }
}