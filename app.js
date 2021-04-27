const button1 = document.getElementById("button1");

const div1 = document.getElementById("div1");

button1.onclick = function() {
    if (div1.style.display === "none") {
        div1.style.display = "block";
    } else {
        div1.style.display = "none";
    }
}


const button3 = document.getElementById("button3");
const div2 = document.getElementById("div2");

const colors = [
    "#FF0040",
    "#04B404",
    "#140718",
    "#DF01A5",
    "#A4A4A4",
];
button3.addEventListener("click", function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    div2.style.backgroundColor = randomColor;
});

const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const div4 = document.getElementById("div4");
let tang = 14;
button4.onclick = function() {

    div4.style.fontSize = `${tang++}px`;
}
button5.onclick = function() {
    div4.style.fontSize = `${tang--}px`;
}

const button2 = document.getElementById("button2");
const div3 = document.getElementById("div3");
const div5 = document.getElementById("div5");
button2.onclick = function() {
    const dao = div3.innerText;
    div3.innerText = div5.innerText;
    div5.innerText = dao;
}