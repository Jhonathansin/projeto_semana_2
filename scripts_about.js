const dark_mode = () => {
    const body = document.querySelector("body")
    const header = document.querySelector("header")
    const navLinks = document.querySelectorAll("header nav a")
    const mainDiv = document.querySelector("main div")
    const footer = document.querySelector("footer")
    const footerDiv = document.querySelector("footer")

    if (header.getAttribute("class") == null) {
        body.setAttribute("class", "dark-mode")
        header.setAttribute("class", "dark-mode")
        navLinks.forEach((value, key) => {
            value.setAttribute("class", "dark-mode")
        })
        mainDiv.setAttribute("class", "dark-mode")
        footer.setAttribute("class", "dark-mode")
        footerDiv.setAttribute("class", "dark-mode")
    } else {
        body.removeAttribute("class")
        header.removeAttribute("class")
        navLinks.forEach((value, key) => {
            value.removeAttribute("class")
        })
        mainDiv.removeAttribute("class")
        footer.removeAttribute("class")
        footerDiv.removeAttribute("class")
    }
}

const configuracoes = document.querySelector("footer > div:nth-child(2) > div:nth-child(2) > a:nth-child(3)")

configuracoes.addEventListener("click", () => {
    dark_mode()
})