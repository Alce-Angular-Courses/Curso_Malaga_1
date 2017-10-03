import { Empleado } from "./sample_1";

let emps = new Array<Empleado>();
emps.push(new Empleado('Pepe', 500));
emps.push(new Empleado('Juan', 200));

for (let emp of emps) {
    console.log(emp.getNombre());
}

emps.forEach(emp => {
    console.log(emp);
});