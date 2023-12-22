// console.log("first");
// const a = 1;

// function add(a: number, b: number) {
//   console.log(a + b);
// }

// add(1, 2);

// let myFriend: string[] = ["Mark", "Jake", "John"];

// // test annotation for multidimential arrays
// type TArr = (number | string | (string | number | boolean[])[])[];

// let arrTwo: TArr = [1, 2, 3, 4, "B", "A", [1, 2, "A", [true, false]]];

// /*
//   Type Annotations With Functions

//   - noImplicitAny

//   - noImplicitReturns
//   --- Will Check All Code Paths In A Function To Ensure They Return A Value

//   - noUnusedLocals
//   --- Report Errors On Unused Local Variables

//   - noUnusedParameters
//   --- Report Errors On Unused Parameters In Functions.
// */

// let showMsg = true;

// function showDetails(name: string, age: number, salary: number): string {
//   let test = 10;
//   if (showMsg) {
//     return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`;
//   }
//   return `No Data To Show`;
// }

// console.log(showDetails("Osama", 40, 5000));

// /*
//   Function
//   - Optional and Default Parameters

//   - In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
//   - "?" Optional Parameter
// */

// function showData(name?: string, age?: number, country?: string) {
//   return `${name} - ${age} - ${country}`;
// }

// console.log(showData("Osama", 40, "Egypt"));

// /*
//   Function
//   - Rest Parameter
//   - What About Float => All Is Under Type Number
// */

// function addAll(...nums: number[]): number {
//   let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     result += nums[i];
//   }
//   // nums.forEach((num) => result += num);
//   return result;
// }

// console.log(addAll(10, 20, 30, 100, 10.5, +true));

/* 
  Data Types
  - Type Alias
*/

// type st = string;

// let newName: st = "Ahmed";

// type obj = {
//   name: string;
//   age: number;
//   country: string;
// };

// let newObj: obj = {
//   name: "Osama",
//   age: 40,
//   country: "Egypt",
// };

// type Buttons = {
//   up: string;
//   right: string;
//   down: string;
//   left: string;
// };

// type Last = {
//   x?: boolean;
// } & Buttons;

// function getActions(btns: Last) {
//   console.log(`Action For Button Up Is ${btns.up}`);
//   console.log(`Action For Button Right Is ${btns.right}`);
//   console.log(`Action For Button Down Is ${btns.down}`);
//   console.log(`Action For Button Left Is ${btns.left}`);
// }

// getActions({
//   up: "Jump",
//   right: "Go Right",
//   down: "Go Down",
//   left: "Go Left",
//   x: true,
// });

/*
  Data Types
  - Literal Types
*/

// type nums = 0 | 1 | -1;

// function compare(num1: number, num2: number): nums {
//   if (num1 === num2) {
//     return 0;
//   } else if (num1 > num2) {
//     return 1;
//   } else {
//     return -1;
//   }
// }

// console.log(compare(20, 20)); // 0
// console.log(compare(20, 15)); // 1
// console.log(compare(20, 30)); // -1

// let myNumber: nums = 1;

/*
  Data Types
  - Tuple
  --- Is Another Sort Of Array Type
  --- We knows Exactly How Many Elements It Contains
  --- We Knows Which Types It Contains At Specific Positions
*/

// let article: readonly [number, string, boolean] = [11, "Title One", true];
// article = [12, "Title Two", false];
// // article.push(100);
// console.log(article);

// const [id, title, published] = article;
// console.log(id);
// console.log(title);
// console.log(published);

/*
  Data Types
  - Void
  --- Function That Will Return Nothing
  --- Function In JavaScript That Not Return A Value Will Show undefined
  --- undefined is not void
  - Never
  --- Return Type Never Returns
  --- The Function Doesn't Have A Normal Completion
  --- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
*/

// function logging(msg: string): void {
//   console.log(msg);
//   return; // undefined
// }

// console.log(logging("Iam A Message"));
// console.log("Test");

// const fail = (msg: string) => {
//   throw new Error(msg);
//   // return 10;
// };

// function alwaysLog(name: string): never {
//   while (true) {
//     console.log(name);
//   }
// }

// alwaysLog("Osama");
// console.log("Test");

/*
  Data Types
  - Enums => Enumerations
  --- Allow Us To Declare A Set Of Named Constants
  --- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
  --- It Organize Your Code
  --- By Default Enums Are Number-Based, First Element Is 0
  --- Theres A Numeric Enums
  --- Theres A String-Based Enums
  --- Theres Heterogeneous Enums [String + Number]
*/

// const KIDS = 15;
// const EASY = 9;
// const MEDIUM = 6;
// const HARD = 3;

// enum Kids {
//   Five = 25,
//   Four = 20,
//   Three = 15,
// }

// enum Level {
//   Kid = Kids.Three,
//   Easy = 9,
//   Medium = 6,
//   Hard = 3,
// }

// let lvl: string = "Easy";

// if (lvl === "Easy") {
//   console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);
// } else if (lvl === "Medium") {
//   console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Medium}`);
// } else if (lvl === "Hard") {
//   console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
// } else {
//   console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Kids}`);
// }

/*
  Data Types
  - Type Assertions ( as )
  --- Sometime Compiler Doesnt Know The Information We Do
  --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/

// let myImg = document.getElementById("my-img") as HTMLImageElement;
// let myImg = <HTMLImageElement>document.getElementById("my-img");
// console.log(myImg.src);

// let data: any = 1000;
// console.log((data as string).repeat(3));

/*
  Data Types
  - Union And Intersection Types
  --- Union Type
  ------ The | Symbol Is Used To Create The Union => "Or"

  --- Intersection Type
  ------ Is A Type That Combines Several Types Into One
  ------ The & Symbol Is Used To Create An Intersection => "And"

  --- If A Union Is An OR, Then An Intersection Is An AND.
*/

// let all: number | string = 100;

// type A = {
//   one: string;
//   two: number;
//   three: boolean;
// };

// type B = A & {
//   four: number;
// };

// type C = {
//   five: boolean;
// };

// type mix = A & C;

// const obj: mix = {
//   one: "String",
//   two: 100,
//   three: true,
//   five: true,
// };

// obj.one = "Osama";

// function getActions(btns: mix) {
//   console.log(`Hello ${btns.one}`);
//   console.log(`Hello ${btns.two}`);
//   console.log(`Hello ${btns.three}`);
//   console.log(`Hello ${btns.five}`);
// }

// getActions({ one: "String", two: 100, three: true, five: true });

// interface A {
//   one: string;
//   two: number;
//   three: boolean;
// }

// interface B extends A {
//   four: number;
// }

// const obj: B = {
//   one: "String",
//   two: 100,
//   three: true,
//   four: 100,
// };

/*
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/

// interface User {
//   id?: number;
//   readonly username: string;
//   country: string;
// }

// let user: User = {
//   id: 100,
//   username: "Elzero",
//   country: "Egypt",
// };

// // user.username = "Syria";

// console.log(user);

// function getData(data: User) {
//   console.log(`Id Is ${data.id}`);
//   console.log(`Username Is ${data.username}`);
//   console.log(`Country Is ${data.country}`);
// }

// getData({ id: 200, username: "Ahmed", country: "KSA" });

/*
  Interface
  - ReOpen The Interface And Use Cases
*/

// Homepage
// interface Settings {
//   readonly theme: boolean;
//   font: string;
// }

// // Articles Page
// interface Settings {
//   sidebar: boolean;
// }

// // Contact Page
// interface Settings {
//   external: boolean;
// }

// let userSettings: Settings = {
//   theme: true,
//   font: "Open Sans",
//   sidebar: false,
//   external: true,
// };

///////// Not ReOpen Type /////////

// type User = {
//   name: string;
//   age: number;
//   country: string;
// };

// type User = {
//   phone: string;
// };

/*
  Interface
  - Extending Interfaces
*/

// interface User {
//   id: number;
//   username: string;
//   country: string;
// }

// interface Moderator {
//   role: string | number;
// }

// interface Admin extends User, Moderator {
//   protect?: boolean;
// }

// let user: Admin = {
//   id: 100,
//   username: "Elzero",
//   country: "Egypt",
//   role: "Mod",
//   protect: true,
// };

// console.log(user.id);

/*
  Generics
*/

// function returnNumber(num: number): number {
//   return num;
// }

// function returnString(str: string): string {
//   return str;
// }

// function returnBoolean(bool: boolean): boolean {
//   return bool;
// }

// console.log(returnNumber(100));
// console.log(returnString("Osama"));
// console.log(returnBoolean(true));

// function returnItem<T>(item: T): T {
//   return item;
// }

// console.log(returnItem<number>(100));
// console.log(returnItem<string>("Osama"));
// console.log(returnItem<boolean>(true));

// function testType<T>(item: T): string {
//   return `Hello ${item} And Type Is ${typeof item}`;
// }

// console.log(testType<number>(100));

/*
  Generics
  - Arrow Function
  - Multiple Types
  - Discussion
*/

// function returnType<T>(val: T): T {
//   return val;
// }

// console.log(returnType<number>(100));
// console.log(returnType<string>("Elzero"));

// const returnTypeArrowSyntax = <T>(val: T): T => val;

// console.log(returnTypeArrowSyntax<number>(100));
// console.log(returnTypeArrowSyntax<string>("Elzero"));

// function testType<T>(val: T): string {
//   return `The Value Is ${val} And Type Is ${typeof val}`;
// }

// console.log(testType<number>(100));
// console.log(testType<string>("Elzero"));

// function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
//   return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
// }

// console.log(multipleTypes<string, number>("Osama", 100));
// console.log(multipleTypes<string, boolean>("Elzero", true));

/*
  Generics
  - Classes
*/

// class User<T = string> {
//   constructor(public value: T) {}
//   show(msg: T): void {
//     console.log(`${msg} - ${this.value}`);
//   }
// }

// let userOne = new User<string>("Elzero");
// console.log(userOne.value);
// userOne.show("Message");

// let userTwo = new User<number | string>(100);
// console.log(userTwo.value);
// userTwo.show("Message");

/*
  Generics
  - Classes And Interfaces
*/

interface Book {
  itemType: string;
  title: string;
  isbn: number;
}

interface Game {
  itemType: string;
  title: string;
  style: string;
  price: number;
}

class Collection<T> {
  public data: T[] = [];
  add(item: T): void {
    this.data.push(item);
  }
}

let itemOne = new Collection<Book>();
itemOne.add({ itemType: "Book", title: "Elzero", isbn: 100100 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);

let itemTwo = new Collection<Game>();
itemTwo.add({
  itemType: "Game",
  title: "Uncharted",
  style: "Action",
  price: 150,
});
console.log(itemTwo);
