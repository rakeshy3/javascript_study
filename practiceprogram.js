console.log('program practise start');

//Linear Search if found return index else -1

console.log('Linear Search start');

const arr1 = [7,2,9,5,3,8,4,6];
const numberToSearch = 3;

function linearSearch(inputArr, numberToSearch){
    for(let i=0; i<inputArr.length; i++){
        if(inputArr[i]=== numberToSearch){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr1, numberToSearch));
console.log('Linear Search end');


console.log('Binary Search start');
//Binary Search
//very fast but it requres alreday sorted array. it divides array into half untill not found

const arrBinarySearch = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const x = 7;
const n = 9;

function binarySearch(inputArr, numberToSearch, l, h){
    if(h >= l){
       
        let m = 0;
        m = (l + h)/2;
        m = Math.floor(m);
        let srch = numberToSearch;
        if(numberToSearch === inputArr[m]){
            return m;
        } else if(numberToSearch > inputArr[m]){
            l= m+1;
            return binarySearch(inputArr, srch, l, h);            
        } else{
            h = m-1;
            return binarySearch(inputArr, srch, l, h);
        }
    }
  
    return -1;
}

console.log(binarySearch(arrBinarySearch, x, 0, 8 ));
console.log('Binary Search end');


console.log('Selection sort start');

/* The selection sort algorithm sorts an array by repeatedly finding the minimum element  from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
1) The subarray which is already sorted. 
2) Remaining subarray which is unsorted.
In every iteration of selection sort, the minimum element  from the unsorted subarray is picked and moved to the sorted subarray. */

const selectionSortArr = [64, 25, 12, 22, 11];
let arrSize1 = selectionSortArr.length;

function swapNumers(arr, minPointer, outerloopI){
    let temp = arr[minPointer];
    arr[minPointer] =  arr[outerloopI];
    arr[outerloopI] = temp;
}

function selectionSort(selectionSortArr, n){
    let min; 
    for(let i=0; i< n-1; i++){
        min=i;
        //loop to find minium value from unsorted array. this loop gives index for minum value
        for(let j= i+1; j< n; j++){
            if(selectionSortArr[j] < selectionSortArr[min]){
                min=j;
            }           
        }
        swapNumers(selectionSortArr, min, i);
    }
    return selectionSortArr;
}
console.log('sorted Array', selectionSort(selectionSortArr, arrSize1));
console.log('selection sort end')


console.log('Bubble sort start');
/* Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
 */
const bubbleSortArr = [5,1,4,2,8];
bubbleSortArrLenght = bubbleSortArr.length;

function bubbleSort(arr, n){
    for(let i=0; i<n-1; i++){
        for(j=0; j < n-1; j++){
            if(arr[j+1] < arr[j]){
                let temp = arr[j+1];
                arr[j+1]= arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}


console.log('buubleSort=', bubbleSort(bubbleSortArr, bubbleSortArrLenght));
console.log('Bubble sort end')


console.log('program practise end');