const square = (number: any) => {
  if (typeof (number) === 'number') return number * number;
  return null;
}

//square pode ser number ou null
const squareNumber = square(5);

//typescript é eficiente o bastante para identificar quem é nulo ou não
if (squareNumber === null) {
  console.log('Sou null', squareNumber);
  //squareNumber * 2, aqui, apresenta erro porque ele sabe que neste bloco squareNumber é null
} else {
  console.log('Não sou null', squareNumber * 2);
}
