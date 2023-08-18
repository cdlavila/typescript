function addition2(a: number, b: number): number;
function addition2(a: string, b: string): string;
function addition2(a: string, b: number): string;
function addition2(a: number, b: string): string;
function addition2(a: unknown, b: unknown): unknown {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return `${a}${b}`;
  }
}

console.log(addition2(1, 2)); // 3
console.log(addition2('Hello', 2)); // "Hello2"
