//selectors
const colors = ["green", "red", "blue", "yellow", "black", "brown", "grey", "purple", "gold", "silver", "cyan", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

//event listeners
btn.addEventListener("click", function () {
    //get random nuber 0-3
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

//functions
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}