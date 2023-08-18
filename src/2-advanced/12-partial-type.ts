interface User12 {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

// Usando `Partial` para hacer todas las propiedades de User opcionales
type PartialUser = Partial<User12>;

// `PartialUser` es ahora un tipo con todas las propiedades de `User`, pero cada una de ellas es opcional.

let partialUser: PartialUser = {
  id: 1,
  name: 'Benjamin Hernández',
  // Podemos omitir `email` y `phoneNumber` ya que son opcionales en `PartialUser`
};

console.log(partialUser); // { id: 1, name: 'Benjamin Hernández' }
