// let {lat, lng} = obj.address.location
// console.log(lat, lng)

// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.course)

// console.log(obj['name'])
// console.log(obj['age'])
// console.log(obj['course'])

// let hello = "name";
// console.log(obj[hello])

// const obj = {
//     name: "manith",
//     age: 21,
//     email: "manithkumar8190@gmail.com"
// }

// for(let key in obj){
//     console.log(`${key} : ${obj[key]}`)
// }

// let obj2 = {...obj}
// let obj2 = Object.assign({}, obj)

let role = "admin";

const obj = {
  name: "manith",
  age: 21,
  course: "MERN",
  address: {
    city: "chennai",
    pin: 600118,
    location: {
      lat: 23.2,
      lng: 20.2,
    },
  },
  [role]: "manith",
};

// let obj2 = {...obj}
let deepClone = JSON.parse(JSON.stringify(obj));
