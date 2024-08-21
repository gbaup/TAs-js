const submitForm = () => {

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    checkEmail(email)
    checkPassword(password)

    if (name === "" || email === "" || password === "") {
        alert("Complete todos los campos!")
        return
    }

    console.log("Formulario enviado!")
}

const checkEmail = () => {

    const email = document.getElementById("email").value

    console.log(email.length)

    if (email.indexOf("@") === -1 || email.length == 0) {
        document.getElementById("emailError").style.display = "block"
    } else document.getElementById("emailError").style.display = "none"
}

const checkPassword = () => {
    const password = document.getElementById("password").value
    if (password.length < 8) {
        document.getElementById("passwordError").style.display = "block"
    } else document.getElementById("passwordError").style.display = "none"

}