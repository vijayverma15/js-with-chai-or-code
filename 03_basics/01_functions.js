function sayMyname(){
    console.log("v");
    console.log("i");
    console.log("j");
    console.log("a");
    console.log("y");
 
}
// sayMyname()

// function addTwoNumbers(number1,number2) {
//     console.log(number1+number2);
    
// }
function addTwoNumbers(number1,number2) {
    // let result=number1+number2
    // return result

    return number1+number2
    
}

const result=addTwoNumbers(3,5)

// console.log("result",result);


function loginUserMeassage(username){
    if(username===undefined){
        console.log("please enter a username");
        return
        
    }
    // return`${username} just logged in`
}
// console.log(loginUserMeassage("vijay"))
// console.log(loginUserMeassage())

  function calculateCardPrice(...num1){     //...rest operator 
        return num1
  } 

  console.log(calculateCardPrice(200,600,500));

  const user={
    username:"hitesh",
    price:199
  }
  
  function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
  }

//   handleObject(user)

//direct object pass
handleObject({
    username:"vijay",
    price:388
})

//direct array pass
const mynewArray=[200,400,500,299]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200,400,298]));

