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
    

}


const gridElements = document.querySelectorAll(".gridElement");

gridElements.forEach(element => {
    element.addEventListener("mouseenter", () => element.style.backgroundColor="black");
});