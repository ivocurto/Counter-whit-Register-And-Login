//LOGIN
let goRegister = document.querySelector(".goRegister");
let loginModal = document.querySelector(".loginModal");
let loginButton = document.querySelector(".loginButton");
let counterContainer = document.querySelector(".counterContainer");

//regsiter
let registerUser
let registerPassword

let registerButton = document.querySelector(".registerButton");
//cambiar de login a registro modal

goRegister.addEventListener("click", () => {
    loginModal.style.display = "none";
    registerModal.style.display = "block";
});

loginButton.addEventListener("click", () => {
    let user = document.querySelector(".user").value;
    let password = document.querySelector(".password").value;
    JSON.stringify(localStorage.getItem("registerUser", registerUser));
    JSON.stringify(localStorage.getItem("registerPassword", registerPassword));
console.log("usuario registrado: "+registerUser, "contraseña registrada: "+registerPassword, "usuario: "+user, "contra: "+password);

    if (user == null || password == null) {
    alert("contraseña incorrecta");
    }

    if (user != registerUser || password != registerPassword) {
        alert("contraseña incorrecta");
    }

    if (registerUser == user && registerPassword == password) {
    alert("contraseña correcta");
    loginModal.style.display = "none";
    counterContainer.style.display = "block"
    } 
});

//REGISTER

registerButton.addEventListener("click", () => {
    registerUser = document.querySelector(".registerUser").value;
    registerPassword = document.querySelector(".registerPassword").value;

    JSON.stringify(localStorage.setItem("registerUser", registerUser));
    JSON.stringify(localStorage.setItem("registerPassword", registerPassword));
    goLoginF();
    console.log('user added');
    console.log(registerUser,registerPassword)
});

//cambiar de registro a login modal
let goLogin = document.querySelector(".goLogin");
let registerModal = document.querySelector(".registerModal");


function goLoginF() {
    registerModal.style.display = "none";
    loginModal.style.display = "block";
}

goLogin.addEventListener("click", () => {
    goLoginF()
});

//CONTADOR

let counter = document.querySelector(".counter");
let number = document.querySelector(".number");
let count = 0;

obtener();

counter.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")){
        count++;
        number.textContent = count;
        guardar();
    }

    if (e.target.classList.contains("subtract")){
        count--;
        number.textContent = count;
        guardar();
    }

    if (e.target.classList.contains("reset")){
        count = 0;
        number.textContent = count;
        guardar();
    }
});



function guardar(){
    localStorage.setItem("count", count);
}

function obtener(){
    if (localStorage.getItem("count")){
        count = localStorage.getItem("count");
        number.textContent = count;
    }
}

