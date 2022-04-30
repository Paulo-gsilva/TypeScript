//TUPLE é um array com tamanho definido e variados tipos
const dataClient: [number, boolean, string] = [1, false, "peixe"];
const dataClient2: [number, string, Array<number>?] = [200, 'gato', [2]]; //Array é opcional

console.log(dataClient2);

//READONLY
const array: readonly string[] = ['paulin', 'riquelmo'];
//array não pode ser alterado por ser um valor readonly
