const input = document.querySelector("main > div > input")
const lupa = document.querySelector("main > div > i")
lupa.addEventListener("click", () => {
    input.focus()
})

lupa.addEventListener("mouseover", () => {
    input.setAttribute("style", "box-shadow: 0 0 0.5em grey")
})

lupa.addEventListener("mouseout", () => {
    input.setAttribute("style", "box-shadow: none")
})

input.addEventListener("mouseover", () => {
    input.setAttribute("style", "box-shadow: 0 0 0.5em grey")
})

input.addEventListener("mouseout", () => {
    input.setAttribute("style", "box-shadow: none")
})

const dark_mode = () => {
    const body = document.querySelector("body")
    const header = document.querySelector("header")
    const navLinks = document.querySelectorAll("header nav a")
    const mainInput = document.querySelector("main > div > input")
    const mainIcon = document.querySelector("main > div > i")
    const mainButtons = document.querySelectorAll("main button")
    const footer = document.querySelector("footer")
    const footerDiv = document.querySelector("footer")

    if (header.getAttribute("class") == null) {
        body.setAttribute("class", "dark-mode")
        header.setAttribute("class", "dark-mode")
        navLinks.forEach((value, key) => {
            value.setAttribute("class", "dark-mode")
        })
        mainInput.setAttribute("class", "dark-mode")
        mainIcon.setAttribute("class", "material-icons dark-mode")
        mainButtons.forEach((value, key) => {
            value.setAttribute("class", "dark-mode")
        })
        footer.setAttribute("class", "dark-mode")
        footerDiv.setAttribute("class", "dark-mode")
    } else {
        body.removeAttribute("class")
        header.removeAttribute("class")
        navLinks.forEach((value, key) => {
            value.removeAttribute("class")
        })
        mainInput.removeAttribute("class")
        mainIcon.removeAttribute("class")
        mainIcon.setAttribute("class", "material-icons")
        mainButtons.forEach((value, key) => {
            value.removeAttribute("class")
        })
        footer.removeAttribute("class")
        footerDiv.removeAttribute("class")
    }
}

const configuracoes = document.querySelector("footer > div:nth-child(2) > div:nth-child(2) > a:nth-child(3)")

configuracoes.addEventListener("click", () => {
    dark_mode()
})