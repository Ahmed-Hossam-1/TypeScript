console.log("first");
const a = 1;

function add(a: number, b: number) {
  console.log(a + b);
}

add(1, 2);

let myFriend: string[] = ["Mark", "Jake", "John"];

// test annotation for multidimential arrays
type TArr = (number | string | (string | number | boolean[])[])[];

let arrTwo: TArr = [1, 2, 3, 4, "B", "A", [1, 2, "A", [true, false]]];

/*
  Type Annotations With Functions

  - noImplicitAny

  - noImplicitReturns
  --- Will Check All Code Paths In A Function To Ensure They Return A Value

  - noUnusedLocals
  --- Report Errors On Unused Local Variables

  - noUnusedParameters
  --- Report Errors On Unused Parameters In Functions.
*/

let showMsg = true;

function showDetails(name: string, age: number, salary: number): string {
  let test = 10;
  if (showMsg) {
    return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`;
  }
  return `No Data To Show`;
}

console.log(showDetails("Osama", 40, 5000));

/*
  Function
  - Optional and Default Parameters

  - In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
  - "?" Optional Parameter
*/

function showData(name?: string, age?: number, country?: string) {
  return `${name} - ${age} - ${country}`;
}

console.log(showData("Osama", 40, "Egypt"));

/*
  Function
  - Rest Parameter
  - What About Float => All Is Under Type Number
*/

function addAll(...nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  // nums.forEach((num) => result += num);
  return result;
}

console.log(addAll(10, 20, 30, 100, 10.5, +true));
