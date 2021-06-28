const btn = document.querySelector("#v2");
btn.onclick = function () {
  alert("hola bonita");
};

function scream() {
  console.log("AHHHHHH!!!!!");
  alert("SCREAMMMING ON MOUSE ENTER");
}
const screamBox = document.getElementById("screamBox");
screamBox.onmouseenter = scream;

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
  alert("clicked");
});

const colorBoxLarge = document.querySelector("#colorBoxLarge");
const wordsBoxText = document.querySelector("#wordsBox");

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};
function colorize() {
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
  this.innerText = this.style.color;
  console.log(this);
}
//adds event listener to the colorBoxLarge Variable
colorBoxLarge.addEventListener("click", colorize);

const colorBoxSmalls = document.getElementsByClassName("colorBoxSmall");
for (let smallBox of colorBoxSmalls) {
  smallBox.addEventListener("click", colorize);
}
const tweetForm = document.querySelector('#tweetForm')
tweetForm.addEventListener('submit', function(e){
  console.log("SUBMIT!!")
  console.log(e)
  e.preventDefault();
})