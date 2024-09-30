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
console.log(loginUserMeassage("vijay"))
console.log(loginUserMeassage())
