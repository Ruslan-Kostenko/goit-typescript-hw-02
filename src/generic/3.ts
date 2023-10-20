/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge <R extends object, K extends object>(objA: R, objB: K): object {
  return Object.assign({}, objA, objB);
}

export {}