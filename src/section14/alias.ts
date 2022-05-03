//ALIAS - usado para criar tipos

type Age = number;
type Person = {
  name: string,
  age: Age,
  color?: string
}

type MainColor = 'Red' | 'Blue' | 'Green';
type SecundaryColor = 'Yellow' | 'Black' | 'White';
type AllColors = MainColor | SecundaryColor; //union type

const person: Person = {
  name: 'John',
  age: 24,
}

export function colorPerson(person: Person, color: AllColors): Person {
  return { ...person, color: color };
  //insere cor no objeto person
}

console.log(colorPerson(person, 'Red'));
