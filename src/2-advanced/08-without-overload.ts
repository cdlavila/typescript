// Without overload
function addition(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return `${a}${b}`;
  }
}

console.log(addition(1, 2)); // 3
console.log(addition('Hello', 2)); // "Hello2"
