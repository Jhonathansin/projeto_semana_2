const links_underline = document.querySelectorAll("section main div > a:nth-child(1)")
const logo = document.querySelector("header h1")

const input = document.querySelector("header input")

links_underline.forEach((value, key) => {
    value.addEventListener("mouseover", () => {
        const title = value.nextSibling.nextSibling.firstChild.nextSibling
        title.setAttribute("class", "underline")
    })
    value.addEventListener("mouseout", () => {
        const title = value.nextSibling.nextSibling.firstChild.nextSibling
        title.removeAttribute("class")
    })
})

logo.addEventListener("click", () => {
    window.location = "./index.html"
})

input.setAttribute("value", "Linguagens de programacao")