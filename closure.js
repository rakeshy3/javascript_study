document.write('let and const, temporal dead zone start');



document.write('let and const, temporal dead zone end');




console.log('Closures start');


function x(){
    for(var i=1; i <=5; i++){
        console.log('value of i is = '+ i);
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
    
}

x();

document.write('Fix closures issue ist way');


function y(){
    for(let j=1; j <=5; j++){
        setTimeout(function(){
            console.log(j);
        },j*1000);
    }
    
}

y();

document.write('Fix closures issue end fisrt way'); 

 document.write('Fix closures issue 2nd way');

function y(){  
    for(var j=1; j <=5; j++){
        function close(j){
            setTimeout(function(){
                console.log(j);
            },j*1000);
        }
        close(j);  
    }
    
}

y();

document.write('Fix closures issue 2nd way end ');

console.log('Closures end');