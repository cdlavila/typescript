interface User14 {
  id: number;
  name: string;
  email: string;
}

// Usando `Readonly` para hacer todas las propiedades de User14 de solo lectura
type ReadonlyUser14 = Readonly<User14>;

// `ReadonlyUser14` es ahora un tipo con todas las propiedades de `User14`, pero cada una de ellas es de solo lectura.

let readonlyUser14: ReadonlyUser14 = {
  id: 1,
  name: 'Rosa López',
  email: 'rosa@email.com'
};

console.log(readonlyUser14); // { id: 1, name: 'Rosa López', email: 'rosa@email.com' }

// Tratar de cambiar una propiedad lanzaría un error
// readonlyUser14.name = 'Jennifer Rodríguez'; // ⛔Error
