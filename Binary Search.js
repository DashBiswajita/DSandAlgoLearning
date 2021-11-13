//Much faster than linear search.
//Instead of eliminating one element at a time (when it does not match with the value), it eliminates of the elements.
//Downside : It works only on sorted arrays.
//Idea is divide and conquer.
//Time complexity Best Case : O(1) Worst Case : O(log n)
function binarySearch(arr,val){
    let left = 0;
    let right = arr.length - 1;
    var middle = Math.floor((left + right) / 2);
    while(arr[middle] !== val && left < right){
         if (arr[middle] < val) left = middle + 1;
         else if(arr[middle] > val)  right = middle - 1;  
         middle = Math.floor((left + right) / 2);
    }
    return arr[middle] === val ? middle : -1;   
}

let index = binarySearch([1,2,3,4,5,6,7,8],9);
console.log(index);
