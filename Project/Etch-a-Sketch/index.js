const paper = document.querySelector(".paper")
const size = document.querySelector("#size")
const color = document.querySelector("color")
paper.innerHTML = ''
paper.style.gridTemplateRows = `repeat(${size}, 1fr)`
paper.style.gridTemplatecolumns = `repeat(${size}, 1fr)`
for (let i = 0; i < size.value*size.value; i++) {

    const win = document.createElement("div")

    paper.appendChild(win)
}