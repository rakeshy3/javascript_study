

//////////////////////


const profile = {
    name:'Peter',
    age: 56,
    kids: [{
            name: 'jil',
            age: 23,
            kids: [{
                name: 'jeter',
                age: 1
            },
            {
                name: 'bill',
                age: 2
            }
        ]
        }]
}

//document.write(<div style ="color:white"></div>);
//in javascript object are not itebrale unless they do not use Itebrale protocal. There we can not use for of loop on object

console.log('Use of Recursion');

let totalAge = 0;
totalAge = totalAge + profile.age;
const addAge = function (obj){
   if(Array.isArray(obj.kids)){
        obj.kids.forEach((elem)=>{
            totalAge = totalAge + elem.age;
            addAge(elem);
        })  
        return  totalAge;
    }
}
console.log(addAge(profile));
console.log('Use of Recursion end');






////////////////////////








console.log('currying=>recursion start');

//add(3).mul(5).divide(3) output should be 5

const add = function(a){
    return {
        mul: function (b){
            let mul = a*b;
            return {
                   divide: function (c){                       
                    return mul/c;
                }
            }
            }
    }
}



//const output = add(3);
console.log(add(3).mul(5).divide(3));
console.log('currying=>recursion end');

console.log('for in loop demo');

const forInLoopObj = {
    name:'Peter',
    age: 56,
    kids: [{
            name: 'jil',
            age: 23,
            kids: [{
                name: 'jeter',
                age: 1
            },
            {
                name: 'bill',
                age: 2
            }
        ]
        }]
}

function dump_properties(obj, obj_name){
    let result = '';
    for(let i  in obj){
        result += obj_name+'.'+ i + '=' + obj[i] + '</br/>';
    }
    return result;
}
console.log(dump_properties(forInLoopObj, 'Member'));
console.log('for in loop demo end');

console.log('difference between for in and for of loop ');


const arr = [3, 5, 7, 9, 'rakesh'];
arr.foo = 'hello';
//console.dir(arr);

for(let i in arr){
    console.log('using for in i='+ i);
}

for(let i of arr){
    console.log('using for of i='+ i);
}

console.log('difference between for in and for of loop end');



console.log('remove duplicate from array in multiple ways start');

//remove duplicate from array method1

const duplicateArr1 = [5, 2, 3, 5, 2, 5, 2, 5, 2, 5, 4];

const arrSet = new Set(duplicateArr1);
console.log(arrSet);
console.log('remove duplicate using set is', [...arrSet]);

console.log('remove duplicate from array second way start');
//remove duplicate from array method2

const duplicateArr2 = [5, 2, 3, 5, 2, 5, 2, 5, 2, 5, 4];

function removeDupicate2(arr){    
    const outputArr = [];
    for(let val of arr){       
        if(outputArr.indexOf(val) === -1){
            outputArr.push(val);
        }    
    }
    return outputArr;
}

console.log('remove duplicate2 is ', removeDupicate2(duplicateArr2));
console.log('remove duplicate from array second way end');

////remove duplicate from array method3 valila without builtin

console.log('remove duplicate from array 3rd way start');

const duplicateArr3 = [5, 2, 3, 5, 2, 5, 2, 5, 2, 5, 4];

function searchInArr(arr, val){
    var hasFound = false;
    if(arr.length === 0){
        hasFound = false;
        return hasFound;
    }  
        for(let i=0; i< arr.length; i++){
            if(arr[i] === val){ 
                hasFound = true; 
                return hasFound;
            }
        }
}


function removeDuplicate3rd (arr){
    const outputArr = [];
    for(let i=0; i< arr.length; i++){
        let val = arr[i];  
        let res = searchInArr(outputArr, val);
        if(!res){
            outputArr.push(val);
        }             
    }
    return outputArr;
}

console.log('removeDuplicate3rd is ', removeDuplicate3rd(duplicateArr3));

console.log('remove duplicate from array 3rd way end');


console.log('remove duplicate from array 4th Way way start');
//remove duplicate 4th way 
// 1 issue with this is that order will not maintain

function removeDuplicate4(){
    const duplicateArr4 = [5, 2, 3, 5, 2, 5, 2, 5, 2, 5, 4];
    const objdup = {};
    const outPutArrDup = [];
    duplicateArr4.forEach((val, indx, arr)=>{    
        objdup[val] = true;
    })
    outPutArrDup.push(...Object.keys(objdup));
    return outPutArrDup;
}

console.log('removeduplicate4thwat', removeDuplicate4());

console.log('remove duplicate from array 4th Way way end');



console.log('remove duplicate from array 5th Way way start');
//remove duplicate 5th way 

function removeDuplicate5(){
    const duplicateArr5 = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl", "Mike", "Nancy"];

    return duplicateArr5.filter((val, indx, arr)=>{
      return arr.indexOf(val) === indx;
    })
}

console.log('removeduplicate5thhway', removeDuplicate5());

console.log('remove duplicate from array 5th Way way end');



console.log('remove duplicate from array in multiple ways end');


////////////// private constructor/singleton in javascript

//Object.seal() //prevent adding and deleting properteies from object 
//Whearesa Object.freeze does same as seal but can not modify/update as well

console.log('singolton in javascript start method1');
class User {
    firstName= "";
    lastName= "";   
    constructor(fName, lName){

        if(User.instance instanceof User){
            return User.instance;
        }
        this.firstName = fName;
        this.lastName = lName;

        Object.freeze(this);
        User.instance = this;
        
    }
   
    calculateAge= function(){
        return this.firstName + ' '+ this.lastName;
    }
}

const obj1 = new User('Suresh', 'Gupta');
const obj2 = new User('Rakesh', 'Yadav');
const obj3 = new User('Tejesh', 'Roy');

console.log('fname=', obj1.firstName);

console.log('user obj1 is=', obj1);
console.log('user obj2 is=', obj2);
console.log('user obj3 is=', obj3);

obj2.firstName ='Kapil';
console.log('obj2', obj2);

console.log('singolton in javascript method1 end');


////////////// private constructor/singleton in javascript end


/////////////////////// programs start ///////////////////////////

/********************      Plaindrome Start */

console.log('palindrome start');

const palindromFun = (function (){
    function checkPalinDrome(testStr){
        let tempStr = testStr.toString().split('').reverse().join('');
        if(testStr.toString() === tempStr ){
            return true;
        }
        return false;
    }

    return {
        palindrom1: checkPalinDrome
    }
})();

if(palindromFun.palindrom1(12321)){
    console.log('its palindrome');
}else{
    console.log('its not palindrome');
}


//////////////////// methot 2 start /////////////////////

const palindromFun2 = (function (){
    function checkPalinDrome(testInput){
       let tempStr = testInput.toString().split('');
       let newArr = [];
       for(let i= tempStr.length-1; i>=0; i--){
            newArr.push(tempStr[i]);
       }
       let newAtr = newArr.join('');
       if(testInput.toString() === newAtr){
        return true;
       }
      return;
    }

    return {
        palindrom1: checkPalinDrome
    }
})();

if(palindromFun2.palindrom1('madam')){
    console.log('Cheking using methd 2 . its palindrome');
}else{
    console.log('Cheking using methd 2 . its not palindrome');
}



///////////////////// method 2 end ////////////////////

console.log('palindrome end');

/********************      Plaindrome end */


///////////////// Fibonacci series start ////////////////////

// fibonacci is a number is sum of previous 2 numbers e.g 0 1 1 2 3 5 8 13 21 34 55 89


console.log('fibnocci method 1 start');

function fibonacci1(n){
    let arr = [0, 1];
    for(let i=2; i< n+1; i++){
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr[n];
}

console.log('fibnocci series', fibonacci1(11));

console.log('fibnocci method1 end');


console.log('fibnocci method 2 start');

function fibonacci2(n){
  if(n < 2){
    return n;
  }
  // 0 1 1 2 3 5 8 13 21 34 55 89
  return fibonacci2(n-2) + fibonacci2(n-1);
}

console.log('fibnocci series methot 2', fibonacci2(11));

console.log('fibnocci method2 end');



///////////////// Fibonacci series end ////////////////////


////////////////////////////// programs end ////////////////////