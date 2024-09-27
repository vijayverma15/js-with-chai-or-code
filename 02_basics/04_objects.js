//const tinderUser = new Object()  //singleton object 
const tinderUser={} // non singleton
tinderUser.id="12345ed"
tinderUser.name="rajababu"
tinderUser.isLoggedIn =false


// console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullName:{
        userfullname:{
            firstname:"vijay",
            lastname:"verma"
        }
    }
}



// console.log(regularUser.fullName.userfullname);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

// const obj4={obj1,obj2}
// const obj4=Object.assign(obj1,obj2,obj3)

const obj4={...obj1,...obj2,...obj3}

// console.log(obj4);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));




