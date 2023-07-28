const Maybe = (value: any) => ({
  map: (fn: (value: any) => any) => (value === null || value === undefined ? Maybe(null) : Maybe(fn(value))),
  flatMap: (fn: (value: any) => any) => (value === null || value === undefined ? Maybe(null) : fn(value)),
  getOrElse: (defaultValue: any) => (value === null || value === undefined ? defaultValue : value)
});

function divide(a: any, b: any) {
  return b === 0 ? Maybe(null) : Maybe(a / b);
}

const result = divide(10, 2)
  .flatMap((value) => divide(value, 0))
  .getOrElse('Error divided by zero');

console.log(result);
