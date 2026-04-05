// const name= {
//    name:"amit",
// }

// function getage(age){
//     console.log("I am "+this.name+"age :"+ age);
// }
// getage.call(name,80);

// bind 

const person={
    name:"test",
}
const person1={
    name:"test1",
}
function getall(age, dob){
  console.log("the name is "+this.name+"  age is "+age+"dob is"+dob)
}

getall.apply(person,[12,12-2-2]);


const myself={
  name:"k",
}

function name(a,b){
    console.log(this.name+""+a+""+b);
}
const value = name.bind(myself,3,4)();

// console.log(value)
