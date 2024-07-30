//Primitive

// 7 types : String, Number, Boolean , null, undefined , Symbole, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn = false
const outsideTemp= null
let userEmail;


const id=Symbol('1234')
const anotherId= Symbol('1234')

console.log(id==anotherId);

const bigNumber=  651984184515494956n




//Reference (Non primitive)

//array, object , functions

const heros=["shaktiman","nagraj","doga"];


let myobj={
  name:"vijay",
  age:21,
}

const myFunction =function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp);
myFunction()

