let form = document.querySelector("form")
let useremail = document.querySelector("#email")
let userpassword = document.querySelector("#password")
let email_error = document.querySelector("#email-error")
let password_error = document.querySelector("#password-error")
let resultMessage = document.querySelector(".resultMessage");


const emailRegex = /^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault()

    email_error.textContent = " "
    password_error.textContent = " "

    let email = useremail.value
    let password = userpassword.value
    let isValid = true

    // email
    if (!emailRegex.test(email)) {
        email_error.textContent = "Invalid Email"
        isValid = false
    }
    else {
        email_error.textContent = " "
    }

    //password
    if (!passwordRegex.test(password)) {
        password_error.textContent = "Invalid Email & password"
        isValid = false
    }
    else {
        password_error.textContent = " "
    }

    //result message
    if (isValid) {
        resultMessage.textContent = "validation Completed"
        resultMessage.classList.add("green")
    }
    else {
        resultMessage.textContent = "validation Failed"
        resultMessage.classList.add("red")
    }


})