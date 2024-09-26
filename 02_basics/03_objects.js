//singleton  //this is made by contructor not in normle use
//object.create

//object literals  
const mysym=Symbol("key1")
const Jsuser = {
    name:"vijay",
    "full name":"vijay verma",
   [mysym]:"mykey1",  //[] use krne sw symbol pass hota hai nhi krne se string
    age:18,
    location:"sehore",
    email:"vijay@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(  Jsuser[mysym])


Jsuser.email="vijay@micro.com"  //value change krne k eliye
//Object.freeze(Jsuser)  // iske bad koi change nhi hoga
Jsuser.email="vijay@chatgpt"
// console.log(Jsuser);


Jsuser.greeting= function(){
    console.log("hello jsuser");
    
}


Jsuser.greetingtwo= function(){
    console.log(`hello jsuser,${this.name}`);
    
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());

