document.write('higher order function start');
//start good coding pratice

const radius = [3, 1, 2, 4];


//we hav to calculate area, circumference, diameter etc

//optimized code using DRY principal

const area = function(radius){
    return (Math.PI * radius * radius);
}

const circumference = function(radius){
    return (2 * Math.PI * radius);
}

const diameter = function(radius){
    return (2 * radius);
}

const calculate = function (shape){
    const output = [];
    for(let i=0; i< radius.length; i++){
        output.push(shape(radius[i]));        
    }
    return output;
}

console.log('area', calculate(area));
console.log('circumference', calculate(circumference));
console.log('diameter', calculate(diameter));


//this is exaclt similar to map
//very intrested 
console.log('araeusingmap', radius.map(area));
console.log('circumferenceusingmap', radius.map(circumference));
console.log('diameterusingmap', radius.map(diameter));


//using prototype

console.log('attaching in array prototype');

Array.prototype.calculate = function (shape){
    const output = [];
    for(let i=0; i< this.length; i++){
        output.push(shape(this[i]));        
    }
    return output;
}

console.log(radius.calculate(area), 'Area using prototype');
console.log(radius.calculate(circumference), 'circumference using prototype');
console.log(radius.calculate(diameter), 'diameter using prototype');

//good coding pratice end

//a function which takes another function as a argument or return a function is called higher order function

//use case of map 
const users = [
    {  firstName: "Rakesh", lastName: "Yadav", age: 26 },
    {  firstName: "Suresh", lastName: "Gupta", age: 75 },
    {  firstName: "Arun", lastName: "Pandey", age: 50 },
    {  firstName: "Akshay", lastName: "Saini", age: 26 }
];

//expected output list all full names 
//["Rakesh Yadav", "Suresh Gupta", " Arun Pandey", "Akshay Saini"]

const output = users.map((user)=> user.firstName + ' ' +  user.lastName  );
console.log(output);


//usecase2 for map and filter start

//find firstName of all those whoes age is < 30  //output should be ['Rakesh', 'Akshay']

const firstNameArr = users.filter((user) => user.age < 30 )
.map((user)=> user.firstName);
console.log(firstNameArr);

//usecase2 for map and filter end


// end map

// use case 1 of reduce start

//expected output
// { 26: 2, 75: 1, 50: 1 }

const ageCountArr = users.reduce((acc, curr) => {
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(ageCountArr);

//use case1 of reduce end


//usecase 2 of reduce start
//find firstName of all those whoes age is < 30  //output should be ['Rakesh', 'Akshay'] using reduce

const firstNameArrLessThan30 = users.reduce((acc, curr) => {
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc
}, []);

console.log(firstNameArrLessThan30);
//usecase 2 of reduce end


document.write('<br/>higher order function end');


//apply , call, bind
console.log(' call, apply and bind demo');

let name = {
    firstName: "Rakesh",
    lastName: "Yadav",
    printFullName: function (){
        console.log(this)
        console.log(this.firstName + " " + this.lastName);
    }
}
name.printFullName();

let name2 = {
    firstName: "Suresh",
    lastName: "Gupta"
   
}
name.printFullName.call(name2);

let anotherFullName = function(homeTown, state, hjk) {
    console.log(homeTown + ','+  state+ ' , '+ hjk);
    console.log(this.firstName + " " + this.lastName + ' from '+ homeTown + ' state '+ state);
}
anotherFullName.call(name, 'Allhabad', 'U.P.');
anotherFullName.call(name2, 'Sultanpur', 'U.P.');
console.log('apply called');
anotherFullName.apply(name, ['Allhabad', 'U.P.', 'algarh']);

//example of bind

console.log('bind start');

let prntFullnameBind = name.printFullName.bind(name);

prntFullnameBind('Allhabad', 'U.P.');


console.log('another bind');

let prntFullnameBindAnother = anotherFullName.bind(name2, 'Allhabad', 'U.P.', 'algarh');

prntFullnameBindAnother();


console.log('writing your cutsom implementation of bind() method also called polyfilled');




let nameObj = {
    firstName: 'Rakesh',
    lastName: 'Yadav'
}

let getFullName = function(homeTown, state, country){
    console.log('I am ' + this.firstName + " " + this.lastName + ' from '+ homeTown + ', '+ state + ', '+ country);
}

let gtFullName = getFullName.bind(nameObj, 'Allahabad');

gtFullName('UP');

// custum bind equivalent implementation

console.log('start your implementation');

Function.prototype.myBind = function (...args){
    let obj = this;
    let params = (args).slice(1);
    return function (...args2){
        obj.apply(args[0], [...params, ...args2]);
    }
}

getFullName.myBind(nameObj, 'Allahabad', 'U.P.')('India');

getFullName.myBind(nameObj, 'Sultanpur', 'M.P.', 'USA')();