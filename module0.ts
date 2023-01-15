function toUpperCase(text: string): string {
  return text.toUpperCase();
}

let text: string = 'ASd';

// null

let nulVal: null = null;

// undefined
let undVal: undefined = undefined;

// Object

let objVal: {a: string; b: number; c: boolean} = {
  a: 'a',
  b: 123,
  c: true,
}

// Array

let arrVal: Array<string | number> = ['a', 'b', 123];

// Turple

let turple: [number, number, string, boolean, number] = [1, 3, 'a', true, 5];

console.log(toUpperCase(text));

// Unknow

let unnknowVal: unknown = {a: ''};

// let unknowCustomVar: {a: string} = unnknowVal;
// unknowVal as {a: string}

// Void

const newFunc = (a: string, b?: number, c: number = 23): void => {
  console.log(a, b, c)
}

// NEVER

// LITERAL

let fontWeight: 500 | 600 | 700 = 600; //Конкретное значение
let stringCr: 'fixed' | 'absolute' = 'fixed';

// ENUM

const text: string = 'Hello';

console.log(text);

const enum Size2 {
  s = 's'
} // Не объект константный enum

export enum TestEnum {
  A = 'first', 
  B = 'second',
  C = 'thirsd',
  D = 's4'
}

console.log(TestEnum.A);
console.log(TestEnum['s4']);

export enum Size {
  s = 's',
  m = 'm',
  l = 'l',
}

let enumVar: TestEnum;

enumVar = TestEnum.A;

Object.keys(TestEnum);

// Object

const UiSizes = {
  s: 's',
  m: 'm',
  l: 'l'
} as const; // - Становится не расширяемым 

// Type

// type UiSizeType = 's' | 'm' | 'l'; - Предпочтительный вариант
type UiSizeType = keyof typeof UiSizes; // Автогенерируемый тип Испоользовать только не расширяемых объектах? 

const textSize: UiSizeType = 'm';

// Типизация 

interface Owner {
  name: 'Artem';
  age: number;
}

interface Dog {
  weight: number;
  size: 'string';
  readonly color: string;
  owner: Owner;
}

interface Cat {
  name?: string;
  age: number;
  owner?: Owner;
}

interface Pet {
  owner: Owner;
  size: number;
}

// Omit<Dog, 'size'> - Тип без поля size исключает свойство size
interface Buldog extends Pet, Omit<Dog, 'size'> { // Это не наследование, а просто расширение. Свойства не должны пересекаться
  snoringVolume: number;
}



export const frenchBuldog: Buldog = {
  weight: 12,
  color: 'fawn',
  size: 22,
  owner: {
    name: 'Artem',
    age: 1,
  },
  snoringVolume: 2,
}

// frenchBuldog.color = 'black'; // - readonly закрепление поля

const cat: Cat = {
  age: 7,
  name: '',
};

// Type

type CatWomen = {
  weight:  number,
  age: number,
  name: string,
}

type Seconds = number;
type Minutes = Record<string, Size>;
type ASD = 's' | 'm' | 'l';

type Women = {
  boobs: number;
}

type Men = Women & { height: number}; 

// MAP TYPE

export type Options = {
  a: string;
  [key: string]: string;
}

const options: Options = {
  a: '',
  aad: '',
}