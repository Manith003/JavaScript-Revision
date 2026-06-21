let form = document.querySelector("form")
let useremail = document.querySelector("#email")
let userpassword = document.querySelector("#password")
let email_error = document.querySelector("#email-error")
let password_error = document.querySelector("#password-error")
let resultMessage = document.querySelector(".resultMessage");


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let email = useremail.value
    let password = userpassword.value

    // email
    if (!emailRegex.test(email)) {
        email_error.textContent = "Invalid Email"
    }
    else {
        email_error.textContent = " "
    }

    //password
    if (!passwordRegex.test(password)) {
        password_error.textContent = "Invalid Email & password"
    }
    else {
        password_error.textContent = " "
    }

    //result message
    if (emailRegex.test(email) && passwordRegex.test(password)) {
        resultMessage.textContent = "validation Completed"
        resultMessage.classList.add("green")
    }
    else {
        resultMessage.textContent = "validation Failed"
        resultMessage.classList.add("red")
    }


})