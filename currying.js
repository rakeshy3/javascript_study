console.log('currying start');

//sum(1)(2)(3)(4)... ()///output should be 10

const sum = function (a){
    return function (b){
        if(b){
            return sum(a+b); //this is recursion
        }else {
            return a;
        }
    }
}
console.log(sum(1)(2)(3)(4)(),'using larger syntax');

const sum2 = a=> b=>  b ? sum(a+b): a;

console.log(sum2(1)(2)(3)(4)(),'using shorter syntax');

console.log('currying end');