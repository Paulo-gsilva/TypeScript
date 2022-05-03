type UpperCaseCallBack = (word: string) => string;

function mapString(array: string[], callBackFn: UpperCaseCallBack): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callBackFn(array[i]));
  }

  return newArray;
}


const abc = ['a', 'b', 'c']
const wordUpperCase = mapString(abc, (word) => word.toUpperCase());
