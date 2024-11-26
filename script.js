const container = document.querySelector(".container");
const buttonGridChange = document.querySelector("button");

buttonGridChange.addEventListener("click", generateGrid);


let defaultSide=16;

function generateGridElements(side) {
    for (i=0;i<side*side;i++){
        const gridElement = document.createElement("div");
        gridElement.classList.add("gridElement");
        gridElement.style.backgroundColor = "rgb(255, 255, 255)";
        gridElement.style.opacity = "1";
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

    colorGridElements(gridElements);



}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}



const gridElements = document.querySelectorAll(".gridElement");

colorGridElements(gridElements);

function colorGridElements(gridElements){
    gridElements.forEach(element => {
        element.addEventListener("mouseenter", () => {
            if (element.style.backgroundColor == "rgb(255, 255, 255)") {
                element.style.backgroundColor = getRandomColor();
                element.style.opacity = "0.1";
            }else {
                let currentOpacity = parseFloat(element.style.opacity);
                element.style.opacity = currentOpacity + 0.1;
            }
        });
    })
}
