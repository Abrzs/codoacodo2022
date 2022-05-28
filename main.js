
let navbarBtn = document.querySelectorAll(".navbar-menu")
let navbarContent = document.querySelector(".navbar-content")
let menuItem = document.querySelectorAll(".menu-item")

let form = document.getElementsByName("contact")[0]

console.log(form)

let toggleVisibility = () => {
    navbarContent.classList.contains("hidden") ?
    navbarContent.classList.remove("hidden") :
    navbarContent.classList.add("hidden")
}

navbarBtn.forEach(e => e.addEventListener("click",toggleVisibility))
menuItem.forEach(e => e.addEventListener("click",toggleVisibility))

let validateForm = (e) => {

    e.preventDefault()
    if (form.email.value == "") {
        alert("El email no puede estar vacio.")
    }

    if(form.msg.value =="") {
        alert("El mensaje no puede estar vacio.")
    }
}

form.addEventListener("submit",validateForm)