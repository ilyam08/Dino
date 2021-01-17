const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let counter = 0;

document.addEventListener("keydown", function(event){
    counter = counter + 1;
    document.getElementById("count").innerHTML = counter;
    jump(); 
});

function jump(){
   if (dino.classList !="jump"){
       dino.classList.add("jump")
   }
   setTimeout(function(){
       dino.classList.remove("jump")
   }, 400)
}

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >=140){
        alert("Game Over")
        counter = 0;
        dino.classList.add("jump")
    }
}, 10)