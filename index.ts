interface Person {
  first: string;
  last: string;
  [key: string]: any;
}

const person: Person = {
  first: "Eric",
  last: "Lee",
};

const person2: Person = {
  first: "Usain",
  last: "Bolt",
  fast: true,
};

//Assign props and even return types.
//In this case, returns a string
function pow(x: number, y: number): string {
  return Math.pow(x, y).toString();
}

pow(5, "foo");

pow(5, 10);

//Can create a tuple: fixed length array where each item in the array has its own type.
//THE QUESTION MARK MEANS OPTIONAL!!
type MyList = [number?, string?, boolean?];

const arr: MyList = [];

arr.push(1);
arr.push("23");
arr.push(false);

//Generics

class Observable<T> {
  constructor(public value: T) {}
}

let x: Observable<number>;

let y: Observable<Person>;

let z = new Observable(23);
