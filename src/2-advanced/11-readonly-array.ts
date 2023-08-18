const readOnlyNumbers: ReadonlyArray<number> = [1,2,2,2];
// readOnlyNumbers.push(9); // ERROR
// readOnlyNumbers.pop(); // ERROR
// readOnlyNumbers.unshift(1); // ERROR
readOnlyNumbers.filter(()=> {})
readOnlyNumbers.reduce(() => 0)
readOnlyNumbers.map(() => 0)
