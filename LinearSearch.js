//Write linear search algorithm for an array.
//Linear Search Algorithm: Goes through each and every element in the array.
//indexOf(),includes(),find(),findIndex() all are based on linear search algorithm.
//time Complexity : O(n)

function linearSearch(arr,val){
    for(let i=0; i<= arr.length; i++){
        if(arr[i] === val)  return i;
    }
    return -1;
}

let index = linearSearch([1,2,3,4,5,6,7,8],5);
console.log(index);

let strIndex = linearSearch(["apple","Banana","Cat","Dog"],"Dog");
console.log(strIndex);