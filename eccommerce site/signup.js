const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordA = document.getElementById("passwordA");
const form = document.getElementById("form");
const popup = document.querySelector(".popup");
const passup = document.querySelector(".passup");
const confirmPass = document.querySelector(".confirm-pass");
const phone = document.getElementById('phone');

function isStrongPassword(password) {
    if (password.length < 8) {
        passup.innerText = "Password should be longer than 8 characters";
        return false;
    }
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
        passup.innerText = "Password should contain capital and small letter";
        return false;
    }
    if (!/\d/.test(password)) {
        passup.innerText = "Password should contain digits";
        return false;
    }
    if (!/^(?=.*[^a-zA-Z0-9]).+$/.test(password)) {
        passup.innerText = "Password should contain atleast one alphanumeric character";
        return false;
    }
    const numCounts = {};
    for (const char of password) {
        if (/\d/.test(char)) {
            numCounts[char] = (numCounts[char] || 0) + 1;
            if (numCounts[char] > 1) {
                passup.innerText = "Password should not contain repeating numbers";
                return false;
            }
        }
    }

    return true;
}

email.addEventListener('keyup',()=>{
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(regex.test(email.value)){
        popup.innerText = "valid email address";
        popup.style.color = "green";
        popup.classList.add("active");
    }else{
        popup.innerText = "enter valid email address";
        popup.style.color = "red";
        popup.classList.add("active");
    }
})

isStrongPassword(password.value)

password.addEventListener("keyup", ()=>{
    if(isStrongPassword(password.value)){
        passup.innerText = "Strong password";
        passup.style.color = "green";
        passup.classList.add("active");
    }else{
        passup.style.color = "red";
        passup.classList.add("active");
    }
    comparePass(password.value,passwordA.value);
})

function comparePass(pass1,pass2){
    if(pass2.length>1){
        if(pass1 !== pass2){
            confirmPass.innerText = "Password do not match";
            confirmPass.classList.add('active');
            confirmPass.style.color = "red";
            return false;
        }else{
            confirmPass.innerText = "Password match";
            confirmPass.classList.add('active');
            confirmPass.style.color = "green";
            return true;
        }
    }
}

passwordA.addEventListener("keyup", ()=>{
    comparePass(password.value,passwordA.value);
})

form.addEventListener("submit",(e)=>{
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!regex.test(email.value)){
        e.preventDefault();
    }
    if(!isStrongPassword(password.value)){
        e.preventDefault();
    }
    if(!comparePass(password.value,passwordA.value)){
        e.preventDefault();
    }
    if(!(/^(?:\+254|0)(7|1)\d{9}$/).test(phone.value)){
        alert("Enter valid phone number")
        e.preventDefault();
    }
})

phone.addEventListener("keyup",()=>{
    let regex = /^(?:\+254|0)(7|1)\d{9}$/;
    if(!regex.test(phone.value)){
        phone.style.color = "red";
    }else{
        phone.style.color = "green";
    }
})

