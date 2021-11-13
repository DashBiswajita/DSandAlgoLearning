//Recursion: A process ( A function ) that calls itself.
//Mostly in complex data structures.
//Sometimes cleaner alternative to itteration.

//Call Stack ---> Its a stack. Any time a function is invoked it is placed (pushed) on the top of the call stack. When javascript sees the return keyword or 
// the function ends , it pops out that function from call stack.

//Recursive function incvoke the same function with different inputs untill it reaches the base case.
// Base case is nothing but the stopping case for the recurssion.

//Example 1: Count down function

function countDown(num){
    if(num >= 0){
        console.log(num);
        num-- ;
        countDown(num);
    }else {
        console.log("All Done !!!");
    }
}

countDown(7);

//Example 2 : factorial

function factorial(num){
    if(num === 1) return 1;
    else return num * factorial(num - 1);
}

factorial(3);

//Helper Method Recursion : A design pattern commonly used with recurssion.
//Here we have an outer function and inside this we have our recussive function defination and invokation. Mostly used with  Arrays.

function collectOdds(nums){
    let result = [];
    function helper(input){
        if(input.length === 0){
            return;
        }
        if(input[0] % 2 !== 0){
            result.push(input[0]);
        }
        helper(input.slice(1));
    }
    helper(nums);

    return result;
}

collectOdds([1,2,3,4,5,6,7,8,9,10,11]);


//Pure Recursion tips : 
//For Arrays use Methods like slice, the spread operator, and concat that makes copies of arrays so you do not mutate them.
//Remember that strings are mutable, so you will need to use methods like slice,substr or substring to make copies of strings.
//To make copies of objects use Object.assign or the spread operator.
