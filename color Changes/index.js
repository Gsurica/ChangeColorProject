const button = document.querySelector(".change__bottom")
const colorsArrays = ["red", "purple", "blue", "black", "white", "brown"]

const randomColor = (color) => {
    color = Math.floor(Math.random() * colorsArrays.length)
    itemColor = colorsArrays[color]
    return itemColor
}

const getColors = (color) => {
    return color = randomColor()
}

const changeColors = () => {
    let changeColor =  document.body.style.backgroundColor = getColors()
    return changeColor
}


button.addEventListener("click", changeColors)