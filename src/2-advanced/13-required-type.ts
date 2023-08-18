interface User13 {
  id: number;
  name: string;
  email?: string;
  phoneNumber?: string;
}

// Usando `Required` para hacer todas las propiedades de User obligatorias
type RequiredUser = Required<User13>;

// `RequiredUser` es ahora un tipo con todas las propiedades de `User`, pero cada una de ellas es obligatoria.

let requiredUser: RequiredUser = {
  id: 1,
  name: 'Fatima Fernández',
  email: 'fatima@email.com',
  phoneNumber: '343-545-789'
  // No podemos omitir `email` y `phoneNumber` ya que son obligatorias en `RequiredUser`
};

console.log(requiredUser); // { id: 1, name: 'Fatima Fernández', email: 'fatima@email.com', phoneNumber: '343-545-789' }
