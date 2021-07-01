// Array methods

const myArray = [1, 2, 3, 4];

map();
// first, we pass a function that gets called on each element of the array in the order
// that they appear (like iterations - for and while)
myArray.map(el => el + 1); // returns NEW array [2,3,4,5]
myArray.map(() => "b"); // returns a NEW array [b,b,b,b]
// the main array stays as is

// it filters out everything where the functions's condition returns false
filter();
myArray.filter(el => el > 1); // returns a new array [2, 3, 4]

reduce();

find();

// check if the passed argument or element exists in the array
includes();
// Checking for primitives
myArray.includes(2); // returns true
myArray.includes(7); // returns false

myArray.includes(1, 2); // check if it includes 1 starting from index 2 --> will return false
// Checking for objects
const newArray = [{id: 1}, {id: 2}, {id: 3}];
newArray.includes({id: 2}) // will return false!!
// this is because the way JS references objects vs primitive types
// primitive types in JS: string, boolean, null, undefined, number, symbol
// JS has a memory bank that contains all these types
// e.g.: var a = 4, JS in this case points to 4 in its memory bank
// var b = 4 and var c = b --> c = 4
// if we change b = 7, then c will stay == 4

// objects are unique, once instatiated, it gets its own unique reference in memory
// arrays are also objects
// objects are collections of things that have properties that have values
// properties are the methods that can be applied on objects
// methods are properties that point to functions
// const obj1 = {id: 1}
// const obj2 = {id: 1}
// obj1 === obj2 will return false!!
// this is because JS is comparing references of objects and not values
// const obj3 = obj2, obj3 is now = {id: 1}
// obj3 === obj2 will return true because both objects are pointing to the same object
// in memory (becasue the reference in memory is actually the same)
// if obj2.id = 17, then also obj3 = 17

// So: const o1 = {id: 1}   const o2 = {id: 2}  const o3 = {id: 3}
// newestArray = {o1, o2, o3};
// newestArray.icludes(o1) --> will return TRUE!! because the reference is the same
// or equal to the references of the elements inside the array