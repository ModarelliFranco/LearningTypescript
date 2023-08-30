export class Person {
  // public name: string;
  // private address: string;

  // constructor(name: string, address: string) {
  //     this.name = name;
  //     this.address = address;
  // }

  constructor(
    public firstName: string,
    public lastName: string,
    private address: string = "No address"
  ) {}
}

// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, "New York");
//   }
// }

export class Hero {
  // public person: Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person //De esta manera no afectaria que a futuro haya una modificacion en la clase Person
  ) {
    // this.person = new Person(realName, 'New York')
  }
}

const tony = new Person("tony", "Stark", "New York");

const ironMan = new Hero("Ironman", 45, "Tony", tony);

const person = new Person("Tony Stark", "New York");

console.log(tony);
console.log(ironMan);
console.log(person);
