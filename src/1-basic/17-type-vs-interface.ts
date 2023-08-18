interface A {
  campo1: number,
  campo2: string
}

interface A {
  campo3: number
}

const a: A = {
  campo1: 1,
  campo2: 'hola',
  campo3: 12
};

console.log(a);


type B = {
    campo1: number,
    campo2: string
}

type B = {
    campo3: number
}

console.log(B);

// ESTO DEVOLVERÁ UN ERROR: Duplicate identifier 'B'
