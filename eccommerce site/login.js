const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const popup = document.querySelector(".popup");
const passup = document.querySelector(".passup");

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
})
form.addEventListener("submit",(e)=>{
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!regex.test(email.value)){
        e.preventDefault();
    }
    if(!isStrongPassword(password.value)){
        e.preventDefault();
    }
})
