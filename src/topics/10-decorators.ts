//Añadir ciertos comportamientos a la clase a traves de un decorador

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "New Property";
    hello = "override";
  };
}

@classDecorator
export class superClass {
  public myProperty: string = "Abc123";

  print() {
    console.log("Hello world");
  }
}
//definicion de clase
console.log(superClass);

const myClass = new superClass();
//instancia de clase
console.log(myClass);
