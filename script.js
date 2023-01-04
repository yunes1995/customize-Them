let css = document.querySelector("h3");
let color1 =document.querySelector(".color1");
let color2 =document.querySelector(".color2");
let body =document.getElementById("main");
// console.log(css)
// console.log(color1)
// console.log(body)
// body.style.background = "blue"

// DRY
function gradient(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input" , gradient)

color2.addEventListener("input" , gradient)
























// body.style.background = 
// "linear-gradient(to right, " 
// + color1.value 
// + ", " 
// + color2.value 
// + ")";


// css.textContent = body.style.background + ";"