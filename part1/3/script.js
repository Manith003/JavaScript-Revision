// function getGrade(val) {
//   if (val < 0 || val < 32) return "Fail";
//   else if (val <= 33 || val < 59) return "GRADE: D";
//   else if (val <= 60 || val < 69) return "GRADE: C";
//   else if (val <= 70 || val < 79) return "GRADE: B";
//   else if (val <= 80 || val < 89) return "GRADE: A";
//   else if (val <= 90 || val < 100) return "GRADE: A+";
//   else return "INVALID RANGE";
// }

// console.log(getGrade(111));

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// let arr = [1,2,3,4,5]

// // let newarr = arr.map((a)=>{
// //  return a*2;
// // })

// console.log(arr)

// rock - paper - scissors

// function rps(user, computer) {
//   if (user === computer) return "Draw";

//   //user winning case
//   if (user === "rock" && computer === "scissors") return "user won";
//   if (user === "scissors" && computer === "paper") return "user won";
//   if (user === "paper" && computer === "rock") return "user won";

//   return "computer won";
// }

// console.log(rps("rock","rock"))

// isLoggedin = false;
// isAdmin = false;

// if (isLoggedin && isAdmin) {
//   console.log("Welcome Admin");
// } else if (isLoggedin) {
//   console.log("welcom User");
// } else {
//   console.log("please Login | Register");
// }

// let weather = 23;

// switch (weather) {
//   case "summer":
//     console.log("summer season");
//     break;
//   case "winter":
//     console.log("winter season");
//     break;
//   case "rainy":
//     console.log("rainy season");
//     break;
//   default:
//     console.log("give seasons!");
// }

let age = 55;

if (age >= 0 && age <= 10) console.log("kid");
else if (age >= 11 && age <= 19) console.log("Teen");
else if (age >= 20 && age <= 40) console.log("Adult");
else console.log("senior");
