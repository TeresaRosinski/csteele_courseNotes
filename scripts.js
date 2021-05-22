const btn = document.querySelector("#v2");
btn.onclick = function () {
  alert("hola bonita");
};


function scream() {
  console.log("AHHHHHH!!!!!")
  alert('SCREAMMMING ON MOUSE ENTER')
}
const screamBox = document.getElementById("screamBox");
screamBox.onmouseenter = scream;