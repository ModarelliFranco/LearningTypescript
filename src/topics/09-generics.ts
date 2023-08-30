//                                      es/recibe
export function whatsMyType<T>(argument: T): T {
  return argument;
}

let amIString = whatsMyType<string>("Hello World");
// let amIString = whatsMyType<string>(123) -> Retornaria error ya que espera recibir un string
let amINumber = whatsMyType(100);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(""));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));
