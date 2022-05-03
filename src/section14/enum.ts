//enum é usado quando se há escolhas para serem feitas
// enum Colors {
//   RED = 10,
//   GREEN = 20,
//   BLUE = 'blue',
//   PINK = 'pink'
// }

enum Colors {
  RED, //0
  GREEN, //1
  BLUE, //2
  PINK //3
}

export function choiceColor(color: Colors): void {
  console.log(`esta são suas opções: ${Colors[color]}`);
}

choiceColor(2);
