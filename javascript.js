const container = document.querySelector("#container");
const btn = document.querySelector(".btn");
const body = document.querySelector("body");

//create 16x16 box
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.classList.add("divs");
        container.appendChild(div); 
        //chage color of de box
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
        });
    }
}

//take a size
btn.addEventListener("click", () => {
    const size = prompt("What size do you want?");
    console.log(size);

    container.innerHTML = "";
    
    for (let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.classList.add("divs");
            container.appendChild(div); 
            //chage color of de box
            div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
            });
        }
    }

})


