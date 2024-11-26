const container = document.querySelector(".container");
const buttonGridChange = document.querySelector("button");

buttonGridChange.addEventListener("click", generateGrid)


let defaultSide=16;

for (i=0;i<defaultSide*defaultSide;i++){
    const gridElement = document.createElement("div");
    gridElement.classList.add("gridElement");
    gridElement.style.width = 600/defaultSide + "px"
    gridElement.style.height = 600/defaultSide + "px"
    container.appendChild(gridElement);
}

function generateGrid () {
    container.innerHTML="";

    let side;

    do {
        side = parseInt(prompt("Insert the grid size (as a single number representing a side less than 100"),10);
    }while(isNaN(side) || side<=0 || side>100);

    let sizeDisplay = document.querySelectorAll(".size");
    sizeDisplay.forEach(element => {element.textContent=side})
    
    for (i=0;i<side*side;i++){
        const gridElement = document.createElement("div");
        gridElement.classList.add("gridElement");
        gridElement.style.width = 600/side + "px"
        gridElement.style.height = 600/side + "px"
        container.appendChild(gridElement);
    }
    
    const gridElements = document.querySelectorAll(".gridElement");

    gridElements.forEach(element => {
        element.addEventListener("mouseenter", () => element.style.backgroundColor="black");
    });

}



const gridElements = document.querySelectorAll(".gridElement");

gridElements.forEach(element => {
    element.addEventListener("mouseenter", () => element.style.backgroundColor="black");
});
