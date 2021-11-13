//This pattern involves dividing a data set into smaller chunks and then repeating a process with subset of data. This pattern can tremendously decrease time 
//complexity.
//eg: merge sort

//Given a sorted array of integers , write a function called search , that accepts a value and returns the index where the value passed to the function is 
//located. if not found , return -1;
//search([1,2,3,4,5],3)// 2
//search([1,2,3,7,9,11,13,14],9) //4
//Time complexity log(N)
function search(arr,n){
    let min = 0;
    let max = arr.length - 1;
    while(min <= max){
      let middle = Math.floor((min + max) / 2);
      if(arr[middle] === n) return middle;
      else if(arr[middle] < n) min = middle +1;
      else max = middle - 1;
    }
    return -1;
}

let searchIndex = search([1,2,3,4,5],5);
console.log(searchIndex);