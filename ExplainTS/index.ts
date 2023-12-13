export {};

let id: number = 55;

id = 45;
console.log(id);

let target: string = "medo";

let arr: object[] = [{ 5: "5" }, { 4: "5" }];
// Tuple 
let arr2: (number | string | boolean)[] = [1, "2", 5, "5s", true];

// Tuple Array 
let employee: (number | string)[][] = [
  [1, "ahmed"],
  [2, "medi"],
  [3, "moham"],
];

// union type
let pId: string | number = 5;
pId = "medo";

// Enum
enum Direction {
  up = 10,
  down,
  left,
  right,
}
console.log(Direction.down);

// object
type User = { id: number; name: string };
let user: User = {
  id: 5,
  name: "ahmed",
};

// type assertion
let uId: any = 5;
let userId = uId as number; //<boolean>uId Or uId as number
console.log(userId);

uId = 55;
userId = uId;
console.log(userId);

// function
function sum(x: number, y: number): number {
  return x + y;
}
console.log(sum(5, 6));

function log(messge: string): void {
  console.log(messge);
}
log("medo");

// interface
// type User2 = { readonly id: number; name: string };
interface User2 {
  readonly id: number;
  name?: string;
}
let user2: User2 = {
  id: 5,
  // name: "ahmed",
};

interface addInterface {
  (x: number, y: number): number;
}

const add: addInterface = (x, y) => x + y;

interface personInter {
  id: number;
  name: string;
  register(): string;
}

class Person implements personInter {
  //  Data modifiers : ( protected  public  private )
  public id;
  public name;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `Hello ${this.name}`;
  }
}

class Employee extends Person {
  postion: string;
  constructor(id: number, name: string, postion: string) {
    super(id, name);
    this.postion = postion;
  }
}

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let arrNum = getArray<number>([1, 2, 3, 4]);

let strArr = getArray<string>(["medo", "ahmed"]);

arrNum.push(5);

console.log(arrNum);

strArr.push("hassan");
console.log(strArr);
