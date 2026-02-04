console.log("Lappu sachin");
let name="pandey";
const age=21;
var roll_no="2400320101186";
let y=null;
let check=true;
console.log(name,age,roll_no,check,y);

console.log(typeof name)// tells type of datatype
//conditional statement
if(age>18)
{
    console.log("eleigible for drinking");
}
else
{
    console.log("not eligible");
}
//loops
for(let i=0;i<age-3;i++)
{
    console.log("Must not drink",i);
}
let i=0;
while(i<3)
{
    console.log(1);
    i++;
}
//function  type 1

let a=2,b=3;
function click(a,b){
    return a*b;
}
//function type 2
function greet (title ="purwar")
{
    console.log( "Hello" +title);
}
//arrow function
let multiply=(a,b)=>a*b;//all var,let and const
console.log(multiply(a,b));
console.log(click(a,b));
//array
let numbers=[1,2,3,4,5];
numbers.push[0];
numbers.pop();
//objects usecase
let Student={
    name:"mishra",
    age:"age",
    course:"cse",
};
console.log(Student.name)
/*output 
type 1:console
type 2 alert*/
alert("Hi");
/*Blocking &Hoisting 
{
  let a = 10;
  const b = 20;
  var c = 30;
}

console.log(c); */
