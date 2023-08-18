interface User15 {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

// Usando `Omit` para omitir ciertas propiedades de la interfaz User
type UserWithoutContact = Omit<User15, 'email' | 'phoneNumber'>; // 👈 Nuevo tipo

// `UserWithoutContact` es ahora un tipo con las propiedades `id` y `name`, pero sin `email` ni `phoneNumber`.

let userOmit: UserWithoutContact = {
  id: 1,
  name: 'Carlos Araujo',
};

console.log(userOmit); // { id: 1, name: 'Carlos Araujo' }
