"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let id = 55;
id = 45;
console.log(id);
let target = "medo";
let arr = [{ 5: "5" }, { 4: "5" }];
// Tuple
let arr2 = [1, "2", 5, "5s", true];
// Tuple Array
let employee = [
    [1, "ahmed"],
    [2, "medi"],
    [3, "moham"],
];
// union type
let pId = 5;
pId = "medo";
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 10] = "up";
    Direction[Direction["down"] = 11] = "down";
    Direction[Direction["left"] = 12] = "left";
    Direction[Direction["right"] = 13] = "right";
})(Direction || (Direction = {}));
console.log(Direction.down);
let user = {
    id: 5,
    name: "ahmed",
};
// type assertion
let uId = 5;
let userId = uId; //<boolean>uId Or uId as number
console.log(userId);
uId = 55;
userId = uId;
console.log(userId);
// function
function sum(x, y) {
    return x + y;
}
console.log(sum(5, 6));
function log(messge) {
    console.log(messge);
}
log("medo");
let user2 = {
    id: 5,
    // name: "ahmed",
};
const add = (x, y) => x + y;
class Person {
    //  Data modifiers : ( protected  public  private )
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `Hello ${this.name}`;
    }
}
class Employee extends Person {
    postion;
    constructor(id, name, postion) {
        super(id, name);
        this.postion = postion;
    }
}
function getArray(items) {
    return new Array().concat(items);
}
let arrNum = getArray([1, 2, 3, 4]);
let strArr = getArray(["medo", "ahmed"]);
arrNum.push(5);
console.log(arrNum);
strArr.push("hassan");
console.log(strArr);
