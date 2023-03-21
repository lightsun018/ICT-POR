const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const menuItem = document.querySelectorAll(".menu-item");

menuBtn.addEventListener("click", () => {
  toggle();
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}

const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )

window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})

let images = ["dice-1.jpg",
"dice-2.jpg",
"dice-3.jpg",
"dice-4.jpg",
"dice-5.jpg",
"dice-6.jpg"];
let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        if (images[dieOneValue] == images[dieTwoValue]){
            document.querySelector("#total").innerHTML = "🎉You win🎉";
        }
        else{
            document.querySelector("#total").innerHTML = "Please Try Again";
        }
    },
    1000
    );
}


