/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): void {
  throw new Error('Error');
}

export {};


// function comby(param1: string | number, param2: string | number) {

// if(typeof param1 === 'number' && param2 === 'number'){
// return param1 + param2;
// } else {
//   if(typeof param1 === 'string' && param2 === 'string') {
//     return param1.toString() + param2.toString();
//   }
// }

// }