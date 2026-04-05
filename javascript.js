const container = document.querySelector("#container");
const btn = document.querySelector(".btn");
const body = document.querySelector("body");

//create 16x16 box
function getAGrid(size) {
   for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.classList.add("divs");
            container.appendChild(div); 
            const divSize = 600 / size;
            div.style.width = divSize + "px";
            div.style.height = divSize + "px";
            //chage color of de box
            div.addEventListener("mouseenter", () => {
                //random color
                const red = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            });
        }
    } 
}

getAGrid(16);

//take a size
btn.addEventListener("click", () => {
    const size = prompt("What size do you want?");
    console.log(size);

    //delete first divs
    container.innerHTML = "";
    
    //create new divs
    getAGrid(size);

})


