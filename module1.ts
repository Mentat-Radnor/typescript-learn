
type  Dog = {
  weight: number;
  size: string;
  readonly color: string;
}

// Копирование синтаксиса и добавление опциональности 
const size: Dog['size'] = 'asd';

type CopyDog = {
  [Property in keyof Dog]?: Dog[Property]
}

type PartialDog = {
  [Property in keyof Dog]?: Dog[Property]
}

type RequiredDog = {
  [Property in keyof Dog]-?: Dog[Property]
}

type ReadonlyDog = {
  readonly [Property in keyof Dog]: Dog[Property]
}

type ReadonlyDogColor = Pick<{
  readonly [Property in keyof Dog]: Dog[Property]
}, 'color'> & Omit<Dog, 'color'>; // Pick Описание структуры только из одного свойства


export type Options = {
  a: string;
  [key: string]: string;
}

const options: Options = {
  a: '',
  aad: '',
}

type DogGetters = {
  [Property in keyof Dog as `get${Capitalize<Property>}`]: () => Dog[Property]
}

type DogSetters = {
  [Property in keyof Dog as `set${Capitalize<Property>}`]: (value: Dog[Property]) => void
}

// class DogClass implements Dog, DogGetters, DogSetters {
//   weight: number;
//   size: string;
//   color: string;
//   getWeight: () => number;
//   getSize: () => string;
//   getColor: () => string;
//   setWeight: (value: number) => void;
//   setSize: (value: string) => void;
//   setColor: (value: string) => void;
  
// }

type Getters<T> = {
  [Property in keyof T as `get${Capitalize<string & Property>}`]: () => T[Property]
}

type Setters<T> = {
  [Property in keyof T as `set${Capitalize<string & Property>}`]: (value: T[Property]) => void
}


type CompleteType<T> = T & Getters<T> & Setters<T>

type CompleteDog = CompleteType<Dog>;

class DogClass implements CompleteType<Dog> {
  weight: number;
  size: string;
  color: string;
  getWeight: () => number;
  getSize: () => string;
  getColor: () => string;
  setWeight: (value: number) => void;
  setSize: (value: string) => void;
  setColor: (value: string) => void;

}
