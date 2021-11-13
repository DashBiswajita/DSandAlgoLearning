//Call Stack ---> Its a stack. Any time a function is invoked it is placed (pushed) on the top of the call stack. When javascript sees the return keyword or 
// the function ends , it pops out that function from call stack.
function eatBreakfast(){
   let meal = cookFood();
   console.log(`Eating ${meal}`); 
}

function takeShower(){
  return "showering";
}

function cookFood(){
   let items = ["oatmeal","Eggs","Protien Shake"];
   return items[Math.floor(Math.random()*items.length)];
}

function wakeUp(){
    takeShower();
    eatBreakfast();
    console.log("Ok , ready to go to work.");
}

wakeUp();