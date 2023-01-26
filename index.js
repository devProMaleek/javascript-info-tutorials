'use strict';

// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

// alert('I love writing Javascript');

// Variable Lesson
// let admin;
// let name;

// name = 'John';
// admin = name;

// alert(name);
// alert(admin);

// if else statement to ternary statement

// let message;
// let login;

// login = prompt('What kind of worker are you?');

// login == 'Employee'
//   ? (message = 'Hello')
//   : login == 'Director'
//   ? (message = 'Greetings')
//   : login == ''
//   ? (message = 'No Login')
//   : (message = '');

// alert(message);

// let i = 0;

// while (i < 3) {
//   alert(i);
//   i++;
// }

// Continue to the next iteration

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 1) {
//     continue;
//   }
//   alert(i);
// }

// for (let i = 0; i < 3; i++) {
//   alert(`Number ${i}!`);
// }

// let j = 0;
// while (j < 3) {
//   alert(`Number ${j}!`);
//   j++;
// }

// Repeat until the input is correct

// let value;
// value = +prompt('Enter a number greater than 100');
// while (value) {
//   value = +prompt('Enter a number greater than 100');
//   if (value > 100) {
//     break;
//   }
// }

// Output Prime Number
// let extentValue;
// extentValue = +prompt('Enter the extent to which you want to see the prime?');

// for (let i = 0; i < extentValue; i++) {
//   if (i % 2 == 0 && i % 3 == 0) {
//     continue;
//   }
//   alert(i);
// }

// Switch Statement
// let a = 5 + 6;

// switch (a) {
//   case 3:
//     alert('You are not anything close');
//     break;
//   case 7:
//     alert('You are moving, keep on moving');
//     break;
//   case 5:
//     alert('You will get there, if you keep on moving');
//     break;
//   case 11:
//     alert('Yaaaaahhh, you have finally gotten the number');
//     break;
//   default:
//     alert("You could have done better, if you hadn't given up");
//     break;
// }

// TASK:Rewrite the "switch" into an "if"
// let browser = prompt('What is your favourite browser?');

// if (browser === 'Edge') {
//   alert("You've got the Edge!");
// } else if (browser === 'Chrome' || 'Firefox' || 'Safari' || 'Opera') {
//   alert('Okay we support these broswers too');
// } else {
//   alert('We hope that this page looks ok!');
// }

// Task: Rewrite "if" into "switch"

// let a = +prompt('a?', '');

// switch (a) {
//   case 0:
//   alert(0);
//   break;
//   case 1:
//   alert(1);
//   break;
//   case 2:
//   case 3:
//   alert('2,3');
//   break;
//   default:
//   alert("The number does not exist");
// }

// Functions

// function min(a, b) {
//   if (a == b) {
//     return 'They are both equal';
//   } else if (a > b) {
//     return b;
//   } else {
//     return a;
//   }
// }

// // alert(min(2, 5));

// function pow(x, n) {
//   return x ** n;
// }

// alert(pow(3, 3));

// Callback Functions
// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk() {
//   alert('You agreed');
// }

// function showCancel() {
//   alert('You cancelled the execution');
// }

// ask('Do you agree', showOk, showCancel);

// const ask = (question, yes, no) => {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// };

// const showOk = () => alert('You agreed');

// const showCancel = () => alert('You cancelled the execution');

// ask('Do you agree?', showOk, showCancel);

// Object

// let a = { name: 'Adebayo', age: 25, gender: 'Male' };
// let b = { name: 'Adebayo', age: 25, gender: 'Male' };
// let c = a;
// // alert(a == c);

// let user = { name: 'John', age: 30 };
// let clone = {};
// let key;
// for (key in user) {
//   clone[key] = user[key];
// }
// // console.log(user.age);

// // Object.assign
// let permission1 = { canView: true };
// let permission2 = { canEdit: true };

// Object.assign(user, permission1, permission2);

// console.log(user);
// alert(user.canView);

// Evaluating this keyword
// let user = { name: 'Adebayo', age: 24, gender: 'Male' };
// let admin = { name: 'Abdulmalik', age: 27, gender: 'Male' };

// let sayHi = function () {s
//   alert(`${this.name} is ${this.age} and he is a ${this.gender}`);
// };

// user.intro = sayHi;
// admin.intro = sayHi;

// user.intro();
// admin.intro();

// Tasks on this

// function makeUser() {
//   return {
//     name: 'John',
//     ref: this,
//   };
// }

// let user = makeUser();
// alert(user.ref);

// create a calculator

// let calculator = {
//   a: '',
//   b: '',

//   read() {
//     this.a = +prompt('what is the value of the first number?', 0);
//     this.b = +prompt('what is the value of the second number?', 0);
//   },

//   sum() {
//     alert(this.a + this.b);
//   },

//   multiply() {
//     alert(this.a * this.b);
//   },
// };

// calculator.read();
// calculator.sum();
// calculator.multiply();

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },

//   down() {
//     this.step--;
//     return this;
//   },

//   showStep() {
//     alert(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep().down().showStep();

// Constructor Function

// const User = function (name) {
//   this.name = name;
//   this.isAdmin = false;
// };

// let user = new User('Adeola');

// alert(user.name);
// alert(user.isAdmin);
// let c = { name: 'Godzilla' };
// const A = function (name) {
//   this.name = name;
//   return c;
// };

// const B = function (name) {
//   this.name = name;
//   return c;
// };
// let a = new A();
// let b = new B();
// alert(a === b);

// Create a Calculator using a constructor function

// const Calculator = function () {
//   this.a = '';
//   this.b = '';

//   this.read = function () {
//     this.a = +prompt('What isthe first value?', 0);
//     this.b = +prompt('What is the second value?', 0);
//   };

//   this.multiply = function () {
//     alert(this.a * this.b);
//   };

//   this.sum = function () {
//     alert(this.a + this.b);
//   };
// };

// let calculator = new Calculator();

// calculator.read();
// calculator.sum();
// calculator.multiply();

// Create a Accumulator using a constructor function

// const Accumulator = function (startingValue) {
//   this.value = startingValue;
//   this.accumlatedValue = this.value;
//   this.read = function () {
//     let newValue = +prompt('what do you want to add again?', 0);
//     this.accumlatedValue += newValue;
//   };

//   this.showAccumulateValue = function () {
//     alert(this.accumlatedValue);
//   };
// };

// let accumulator = new Accumulator(3);
// accumulator.read();
// alert(accumulator.accumlatedValue);
// accumulator.showAccumulateValue();

// let str = 'As sly as a fox, as strong as an ox';

// let target = 'as';
// let output = [];
// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   output.push(foundPos);
//   if (foundPos === -1) {
//     break;
//   }
//   alert(output);
//   pos = foundPos + 1;
// }

// startWith, endWith, includes
// let example = 'Widget with id';
// alert(example.startsWith('Wid'));
// alert(example.endsWith('id'));
// alert(example.includes('with'));

// Getting a substring with slice, substring, substr
// let str = 'stringify';
// alert(str.slice(0, 5));

// function ucFirst(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }
// alert(ucFirst('abdulmalik'));

// function checkSpam(str) {
//   let viagraLowerCase = ""
//   let viagraUpperCase = ""
//   let xxxLowerCase = ""
//   let xxxUpperCase = ""
//   return (str.includes())
// }

function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 1) + '...';
  } else {
    return str;
  }
}

// alert(truncate('Hi everyone!', 20));

// alert(truncate("What I'd like to tell on this topic is:", 20));

// Array
let fruits = [];
fruits[99999] = 'Banana';

fruits.age = 25;
// alert(fruits);

// Array Methods
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let arrOfUser = [
  { id: 1, name: 'Adebayo' },
  { id: 2, name: 'Abdulmalik' },
  { id: 3, name: 'Adeola' },
];

// let forEach = arr.forEach((item, index, array) => {
//   return alert(`${item} is at index ${index} on ${array}`);
// });

// console.log(forEach);

let findId = arrOfUser.find((item) => item.id === 1);

// alert(findId);

let lengths = ['Bilbo', 'Gandalf', 'Nazgul'].map((item) => item.length);
// alert(lengths);

// let str = 'Bilbo Gandalf Nazgul';

// alert(str.split(' '));

let arrays = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arrays.join('.'); // glue the array into a string using ;

// alert(str);

// alert(arrays[3]);

let numIdenticalPairs = function (input) {
  let output = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        output++;
      }
    }
  }
  return output;
};

let testInput = [1, 2, 3];
// alert(numIdenticalPairs(testInput));

// let unique = function (arr) {
//   return Array.from(new Set(arr));
// };

// alert(
//   unique([
//     'Hare',
//     'Krishna',
//     'Hare',
//     'Krishna',
//     'Krishna',
//     'Krishna',
//     'Hare',
//     'Hare',
//     ':-O',
//   ])
// );

function aclean(array) {
  let map = new Map();

  for (let word of array) {
    // split the word by letters, sort them and join back
    let sorted = word.toLowerCase().split('').sort().join(''); // (*)
    map.set(sorted, word);
  }

  return map;
}

let arra = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

// alert(aclean(arra));

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

// alert(pockets.pen);

class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = -10;
// alert(coffeeMachine.waterAmount)

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let array = new PowerArray(1, 2, 5, 10, 50);
// alert(array.isEmpty()); // false

let filteredArr = array.filter((item) => item >= 60);
// alert(filteredArr); // 10, 50
// alert(filteredArr.isEmpty());

// alert(Array instanceof Object);

window.onerror = function (message, url, line, col, error) {
  alert(
    `${message}\n At ${line}:${col} of ${url} and the name of the error is ${error.name} `
  );
};

function readData() {
  badFunc(); // Whoops, something went wrong!
}

// readData();

fetch('/article/promise-chaining/user.json')
  // .then below runs when the remote server responds
  .then(function (response) {
    // response.text() returns a new promise that resolves with the full response text
    // when it loads
    return response.json();
  })
  .then(function (json) {
    // ...and here's the content of the remote file
    alert(json); // {"name": "iliakan", "isAdmin": true}
  });