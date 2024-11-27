const container = document.querySelector(".container");
const buttonGridChange = document.querySelector("#button");
const buttonBWChange = document.querySelector(".bw");
const buttonRGBChange = document.querySelector(".rgb");
const buttonDarkeningChange = document.querySelector(".darkening")
const buttonEraserChange = document.querySelector(".eraser");
const buttonClearChange = document.querySelector(".clear");

buttonGridChange.addEventListener("click", generateGrid);
buttonBWChange.addEventListener("click", enableBW);
buttonRGBChange.addEventListener("click", enableRGB);
buttonEraserChange.addEventListener("click", enableEraser);
buttonClearChange.addEventListener("click", enableClear);

let defaultSide=16;
let isMouseDown = false;

document.body.addEventListener("mousedown", (e) => {
    if (e.button === 0) isMouseDown=true;
});
document.body.addEventListener("mouseup", (e) => {
    isMouseDown=false;
});
document.body.addEventListener("mouseleave", (e) => {
    isMouseDown=false;
});

function generateGridElements(side) {
    for (i=0;i<side*side;i++){
        const gridElement = document.createElement("div");
        gridElement.classList.add("gridElement");
        gridElement.style.backgroundColor = "rgb(255, 255, 255)";
        gridElement.style.opacity = "0";
        gridElement.style.width = 600/side + "px";
        gridElement.style.height = 600/side + "px";
        container.appendChild(gridElement);
    }
}

generateGridElements(defaultSide);

function generateGrid () {

    container.innerHTML="";

    let side;

    do {
        side = parseInt(prompt("Insert the grid size (as a single number representing a side less than 100"),10);
    }while(isNaN(side) || side<=0 || side>100);

    let sizeDisplay = document.querySelectorAll(".size");
    sizeDisplay.forEach(element => {element.textContent=side})
    
    generateGridElements(side);
    
    const gridElements = document.querySelectorAll(".gridElement");

    bwColorGridElements(gridElements);

}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const gridElements = document.querySelectorAll(".gridElement");

bwColorGridElements(gridElements);

function rgbColorGridElements(gridElements){
    gridElements.forEach(element => {
        element.onmousedown = () => {
            if (element.style.backgroundColor == "rgb(255, 255, 255)" || parseFloat(element.style.opacity) == 0) {
                element.style.backgroundColor = getRandomColor();
                element.style.opacity = "0.1";
            }else {
                let currentOpacity = parseFloat(element.style.opacity);
                element.style.opacity = currentOpacity + 0.1;
            }
        } 
        element.onmouseenter = () => {
            if (isMouseDown){
                if (element.style.backgroundColor == "rgb(255, 255, 255)" || parseFloat(element.style.opacity) == 0) {
                    element.style.backgroundColor = getRandomColor();
                    element.style.opacity = "0.1";
                }else {
                    let currentOpacity = parseFloat(element.style.opacity);
                    element.style.opacity = currentOpacity + 0.1;
                }
            }
        }
    })
};

function bwColorGridElements(gridElements) {
    gridElements.forEach(element => {
        element.onmousedown = () => {
            if(element.style.backgroundColor == "rgb(255, 255, 255)" || parseFloat(element.style.opacity) ===0) {
                element.style.backgroundColor = "black";
                element.style.opacity = "0.1";
            }else {
                let currentOpacity = parseFloat(element.style.opacity);
                element.style.opacity = currentOpacity + 0.1;
            }
        }
        element.onmouseenter = () => {
            if(isMouseDown){
                if(element.style.backgroundColor == "rgb(255, 255, 255)" || parseFloat(element.style.opacity) ===0) {
                    element.style.backgroundColor = "black";
                    element.style.opacity = "0.1";
                }else {
                    let currentOpacity = parseFloat(element.style.opacity);
                    element.style.opacity = currentOpacity + 0.1;
                }
            }
        }
    })
};

function eraseColorGridElements(gridElements) {
    gridElements.forEach(element => {
        element.onmousedown = () => {
            if(element.style.backgroundColor != "rgb(255, 255, 255)") {
                element.style.backgroundColor = "white";
                element.style.opacity = "0";
            }
        } 
        element.onmouseenter = () => {
            if(isMouseDown){
                if(element.style.backgroundColor != "rgb(255, 255, 255)") {
                    element.style.backgroundColor = "white";
                    element.style.opacity = "0";
                }
            }
        }
    })
};

function enableRGB() {
    const gridElements = document.querySelectorAll(".gridElement")
    rgbColorGridElements(gridElements);
}

function enableBW() {
    const gridElements = document.querySelectorAll(".gridElement")
    bwColorGridElements(gridElements);
}

function enableEraser() {
    const gridElements = document.querySelectorAll(".gridElement")
    eraseColorGridElements(gridElements);
}

function enableClear() {
    container.innerHTML="";
    let sizeDisplay = document.querySelector(".size");
    let side = sizeDisplay.textContent;
    generateGridElements(side);
    const gridElements = document.querySelectorAll(".gridElement");
    bwColorGridElements(gridElements);
}