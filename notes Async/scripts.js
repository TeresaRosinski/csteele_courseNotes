//Passing setTimeout as a callback to itself over and over as a way to time the changes in the background. Nested Functions
/*
setTimeout(() => {
  document.body.style.backgroundColor = "orange";
  setTimeout(() => {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
      document.body.style.backgroundColor = "blue";
    }, 1000);
    setTimeout(() => {
      document.body.style.backgroundColor = "green";
    }, 1000);
  }, 1000);
}, 1000);
*/
//Creating a function that takes setTime as well as colors. More generic. Less code.
//doNext is  a function that will be executed after the color of the page changes - you can pass back in delayedColor Change over and over again
const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext();
  }, delay);
};


delayedColorChange("olive", 1000, () =>{
  delayedColorChange("brown", 1000, () => {
    delayedColorChange("black", 1000, () => {
      delayedColorChange("white", 1000)
    })
  })
}); 
