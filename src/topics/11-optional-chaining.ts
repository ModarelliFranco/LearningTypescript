export interface Passanger {
  name: string;
  children?: string[];
}

const passanger1: Passanger = {
  name: "Franco",
};

const passanger2: Passanger = {
  name: "Melisa",
  children: ["Patricio"],
};

const printChildren = (passanger: Passanger) => {
  const howManyChildren = passanger.children?.length || 0;

  console.log(passanger.name, howManyChildren);
};

const returnChildrenNumber = (passanger: Passanger): number => {
  const howManyChildren = passanger.children!.length; // El simbolo "!"(non-null assertion operator) le asegura a typescript que siempre va a recibir un valor distinto a undefined o null

  console.log(passanger.name, howManyChildren);

  return howManyChildren;
};

printChildren(passanger1);
