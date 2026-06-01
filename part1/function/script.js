// function abcd(){
// console.log("this is function declaration...")
// }
// abcd()

// // this is called func declaration and statement

// let func = function(){
// console.log("this is called function expression")
// }
// func()

// // this is called function expression

// let faf = ()=>{
// console.log("this is called fat arrow function")
// }
// faf()

// // this is called fat arrow function

// function abc(...val){
//     console.log(val)
// }

// abc(1,2,3,4,5,6,7,8)

function test(cb) {
  cb();
}

test(function () {
  console.log("hello");
});
