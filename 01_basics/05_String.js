 const name="vijay"
 const repoCount=50
 
 //console.log(name+repoCount+" value");  //old way not be use

 console.log(`hello my name is ${name} and my repo count is ${repoCount}`);  //this is new way and use this

 const gameName= new String('vijay-hs') 

//  console.log(gameName[0]);
//  console.log(gameName.__proto__);


//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
//  console.log(gameName.charAt(2));
//  console.log(gameName.indexOf('a'));

const newstrin=gameName.substring(0,4)
// console.log(newstrin);

const anotherstring = gameName.slice(-8,3)
// console.log(anotherstring);

// const newStringOne="  vijay  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url="https://vijay.com.vijay%20verma"

// console.log(url.replace('%20','-'))

console.log(url.includes('vijay'));

console.log(gameName.split('-'));

