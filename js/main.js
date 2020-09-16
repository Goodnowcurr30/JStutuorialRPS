/*var myPrompt = prompt('Are you a robot?');
console.log(myPrompt);
var myAlert = alert('Do you wana continue?');
console.log(myAlert);
var myConfirm = confirm('Are you sure?');
console.log(myConfirm);*/
//console.log("Hello World!");


// Manipulate DOM with Javascript
/*var header1 = document.createElement('h1');
header1.textContent = "Hello World!";
document.body.appendChild(header1);
header1.style.color = 'blue';

var head2 = document.createElement('h2');
var my_div = document.createElement('div');
var par = document.createElement('p');


head2.textContent = "This is a website";
my_div.textContent = "This is a div";
par.textContent = "Welcome to my page";
document.body.appendChild(head2);
document.body.appendChild(my_div);
document.body.appendChild(par);


head2.style.color = 'red';
my_div.style.color = 'white';
my_div.style.backgroundColor = 'green';*/

/*var myAge = 18;
console.log(myAge);*/

/*var age = prompt("whats your age?");
document.body.appendChild(par).innerText = age;*/


/*var num1 = 10
while (num1 <= 100){
    num1 += 1;
    console.log(num1);
}*/

// function
function first(params) {
    alert("This is a function");
}
//call
//first();

function myName(yourName) {
    var result = "hello " + yourName;
    console.log(result);
}
//var name = prompt("what is your name?");
//myName(name);

function myNumbers(a, b){
    var result = a + b;
    console.log(result);
}
//myNumbers(10, 5);

// For loop
for (let num = 0; num <= 100; num++){
    //console.log(num);
}

// Data types
let yourAge = 18; //myNumbers
let theName = "Jade"; //string
let object = {name: 'Ben', age: '10', sex: 'male', color: 'fair'}; //object with key and values
let truth = false; //boolean
let groceries = ['apple', 'mango', 'orange', 'strawberry']; //array or list
let random; //undefined
let nothing = null; //value null


// strings in JavaScript
let fruit = 'pineapple';
let someGroceries = 'apple, mango, orange, strawberry';

console.log(fruit.length);
console.log(fruit.indexOf('app'));
console.log(fruit.slice(1, 6));
console.log(fruit.replace('pine', 'my'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(7));
console.log(fruit.split('')); //split by character
console.log(someGroceries.split(',')); //split by comma


// arrays in JS
let fruits = ['apple', 'mango', 'orange', 'strawberry'];
fruits = new Array('apple', 'mango', 'orange', 'strawberry');

console.log(fruits[2]);
fruits[4] = 'guava'; //alternative for push
fruits[2] = 'paw-paw';
console.log(fruits);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
// array common methods
console.log('some fruits:', fruits.toString());
console.log(fruits.join('-'));
console.log(fruits.pop(), fruits); //remove last item
console.log(fruits, fruits.push('blackberries')); //append
console.log(fruits.shift()); //removes first element
console.log(fruits.unshift('watermelon')); //add first element

let vegetables = ['tomato', 'carrot', 'cabbage'];
let allGroceries = fruits.concat(vegetables); // combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 5));
console.log(allGroceries[5]);
console.log(allGroceries.reverse());

let someNumbers = [1, 5, 66, 34, 67, 46, 90, 15];
console.log(someNumbers.sort(function(a, b) {return a-b})); //sort in ascending order
console.log(someNumbers.sort(function(a, b) {return b-a})); //sort in ascending order

let emptyArray = new Array();
for (let nums = 0; nums <= 20; nums++) {
    emptyArray.push(nums);
}
console.log(emptyArray);


// Objects in JavaScript(Dictionaries in python)
let myObject = {
    first: 'Goodnow', 
    last: 'Merenini', 
    age: 16, 
    height: 150,
    detailInfo: function(){
        return this.first + '\n' + this.last;
    }
};
console.log(myObject.age);
//myObject.last = 'Curry';
console.log(myObject.first, myObject.last);
//let detail = myObject;
console.log(myObject.detailInfo());
//console.log(detail.detailInfo());

/*let myObjects = {
    first: prompt('whats your first name?'),
    last: prompt('whats your last name?'),
    age: prompt('How young are you?'), //you can increment
    height: prompt('whats your heigt?')
};
console.log(myObjects);
console.log(myObjects.first, myObjects.age);*/


// Conditionals, Control flows (if else)
//let age = prompt("What is your age?");
//let output;

/*if ((age >= 18) && (age <= 40)) {
    output = "Part of the team";
}else{
    output = "Its an intruder, not one of us.. Extaminate!";
}
console.log(output);*/


// Switch statements
// Getting the day of the week

//let day = prompt("Enter the day number you want to check:");
let day = 5;
switch(day){
    case 1:
        day = 'Sunday';
        break;
    case 2:
        day = 'Monday';
        break;
    case 3:
        day = 'Tuesday';
        break;
    case 4:
        day = 'Wednesday';
        break;
    case 5:
        day = 'Thursday';
        break;
    case 6:
        day = 'Friday';
        break;
    case 7:
        day = 'Saturday';
        break;
    default:
        day = 'today';
}
console.log(day);


// Learning JSON in five minuites
// JSON file
// its used to carry api's configuration, very lightweight. 
//its a list/Array with dictionary/onjects

