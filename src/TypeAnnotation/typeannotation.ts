/* eslint-disable */
let name: string = 'Paulo';
let age: number = 20;
let student: boolean = true;

//ARRAY
//let arrayOfNumber: Array<number> = [4, 4, 4, 2, 3, 3, 3]
let arrayOfNumber: number[] = [4, 4, 4, 2, 3, 3, 3];

//OBJETOS
let personObject: {namePerson: string, agePerson: number, marriedPerson?: boolean} = {
  namePerson: 'Paulo',
  agePerson: 21,
  marriedPerson: false
}

//FUNÇÕES
function sum(x:number, y:number): number{
  return x + y;
}

const sum2: (x: number, y:number) => number = (x, y) => x + y;
