let counter = 0;
const getData = ()=>{
    //call api etc
    console.log('counter', counter++);
}

const debounce = function(fn, d){
    let timer ;
    return function(){
        let context = this;
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            getData.apply(context, args);
        }, d);
    }
}

const betterFunction = debounce(getData, 300);

//todo throttling


//implement throttling

console.log('Throttling demo start');
let throttleCounter = 0;
const someExpensiveFunction = ()=>{
    console.log('some expensive things are going on...'+ throttleCounter++);
}

const throttle = (func, duration)=>{
    let flag = true;
    return function(){
        let context = this;
        args = arguments;
        if(flag){
            func.apply(context, args);
            flag = false;

            setTimeout(()=>{
                flag = true;
            }, duration)
        }else{

        }
    }
}

const someBetterExpensiveFunction = throttle(someExpensiveFunction, 1000);

window.addEventListener('resize', someBetterExpensiveFunction);


console.log('Throttling demo end');

//todo throttling


