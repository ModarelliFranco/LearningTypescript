function addNumbers(a: number, b: number): number {
    return a + b;
}




const addNumberArrow = (a: number, b: number): string => {
    return `${a + b}`;
}



function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

// const resultMultiply: number = multiply(5);
// const resultArrow = addNumberArrow(1, 2);
// const result = addNumbers(1,2);
// console.log({result, resultArrow, resultMultiply})

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Vida = ${this.hp}`);
    }
}

healCharacter(strider, 10);
healCharacter(strider, 30);

strider.showHp();


export{};