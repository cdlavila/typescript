interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

// Usando `Pick` para seleccionar ciertas propiedades de User
type UserContactInfo = Pick<User, 'email' | 'phoneNumber'>;

// `UserContactInfo` es ahora un tipo con solo las propiedades `email` y `phoneNumber`

let contactInfo: UserContactInfo = {
  email: "user@email.com",
  phoneNumber: "653-951-802"
};

console.log(contactInfo); // { email: "user@email.com", phoneNumber: "653-951-802" }
