//Dates

let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let mycreatedDate= new Date(2024,0,23)
// let mycreatedDate= new Date(2024,0,23,5,3)
// let mycreatedDate= new Date("2024-01-14")
let mycreatedDate= new Date("01-14-2024")
// console.log(mycreatedDate.toLocaleString());

let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long",
})


