let rwheel = document.querySelector("#rwheel");
let lwheel = document.querySelector("#lwheel");
let car = document.querySelector("#car");

// Right wheel
function bluecolorright() {
    rwheel.style.fill = "blue";
    rwheel.removeEventListener("mouseout", blackcolorright);
    rwheel.removeEventListener("mouseover", greencolorright);
}
rwheel.addEventListener("click", bluecolorright);

function greencolorright() {
    rwheel.style.fill = "green";
}
rwheel.addEventListener("mouseover", greencolorright);

function blackcolorright() {
    rwheel.style.fill = "#464655";
}
rwheel.addEventListener("mouseout", blackcolorright);

//Left wheel
function bluecolorleft() {
    lwheel.style.fill = "blue";
    lwheel.removeEventListener("mouseout", blackcolorleft);
    lwheel.removeEventListener("mouseover", greencolorleft);
}
lwheel.addEventListener("click", bluecolorleft);

function greencolorleft() {
    lwheel.style.fill = "green";
}
lwheel.addEventListener("mouseover", greencolorleft);

function blackcolorleft() {
    lwheel.style.fill = "#464655";
}
lwheel.addEventListener("mouseout", blackcolorleft);

//Car moves
function forward() {
    car.style.animationName = "forward";
}
car.addEventListener("click", forward);

function back() {
    car.style.animationName = "back";
}
car.addEventListener("dblclick", back);

// onclick="forward()" ondblclick="back()"


// function forward() {
//     car.style.rectX = "100%";
// }

// function back() {
//     car.style.rectX = "0";
// }


