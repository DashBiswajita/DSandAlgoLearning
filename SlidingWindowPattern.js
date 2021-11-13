//Slinding window pattern
//This pattern involves creating a window which can either be an array or number from one position to another. Depending on certian condition the window either
//increases or closes (and a new window is created.). Very useful for keeping track of a subset of data in an array/string etc.

//eg. Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n 
//consecutive elements in the array.

//maxSubarraySum([1,2,5,2,8,1,5],2) // 10
//maxSubarraySum([],4)//null

function maxSubarraySum(arr,n){
    let maxSum = 0;
    let tempSum = 0;
    let MaxSumSubArray = arr.slice(0,n);
    if(arr.length < n) return null;
    for(let i = 0; i< n; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = n; i < arr.length; i++){
        tempSum = tempSum +arr[i] - arr[i-n];
        maxSum = Math.max(maxSum,tempSum);
         console.log(maxSum);
        if(maxSum === tempSum) {
         MaxSumSubArray = arr.slice(i-n+1,i+1);
        }  
    }
    return MaxSumSubArray;
       
}
let maxSumArray = maxSubarraySum([1,2,2,5,2,8,6,5],3);
console.log(maxSumArray);