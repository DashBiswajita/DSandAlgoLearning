//write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values
//that sum to 0 or undefined if pair does not exist.

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
//sumZero([-2,0,1,3]) // undefined
//sumZero([1,2,3]) // undefined
//time complexity :O(N) and space complexity : O(1)

function sumZero(arr){
    let left = 0;
    let right = arr.length -1;
    while(left < right){
        let sum = arr[left]+arr[right];
        if(sum === 0) return [arr[left],arr[right]];
        else if(sum > 0) right--;
        else left ++;
    }
 }
 
 // let pair = sumZero([-3,-2,-1,0,1,2,3]);
 // console.log(pair);
 
 //Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it 
 //will always be a sorted array.
 
 //countUniqueValues([1,1,1,1,1,2]) //2
 //countUniqueValues([]) // 0
 //countUniqueValues([-2,-1,-1,0,1])//4
 //time complexity: O(N)
 
 function countUniqueValues(arr){
 
     let uniqueValueObj = {}
     arr.forEach(ele => {
         uniqueValueObj[ele] = (uniqueValueObj[ele] || 0) +1;
     })
     //console.log(uniqueValueObj);
     return Object.keys(uniqueValueObj).length;
 }
 // let count = countUniqueValues([-2,-1,-1,0,1]);
 // console.log(count);
 
 //another method : time complexity O(N)
 function countUniqueValues2(arr){
     let i = 0;
     if(arr.length === 0) return 0;
     for(let j = 1; j< arr.length; j ++){
         if(arr[i] !== arr[j]){
             i++;
             arr[i] = arr[j];
         }
     }
 
     //console.log(arr);
     return i+1;
 }
 
 // let count1 = countUniqueValues2([-2,-1,-1,0,1]);
 // console.log(count1);
 
 //another method 
 
 function countUniqueValues3(arr){
     let i = 0;
     let j = i+1;
    while(i < arr.length){
        if(arr[i] == arr[j]){
            j++;
        }else{
            arr.splice(i+1,j-i-1);
            i++;
            j = i+1;
        }
    }
 
     console.log(arr);
     return arr.length;
 }
 
 let count2 = countUniqueValues3([]);
 console.log(count2);