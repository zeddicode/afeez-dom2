// document.addEventListener("DOMContentLoaded")
const container = document.querySelector(".container")
const colorBox = document.querySelector("#color-box")
const changeColorBtn = document.querySelector("#change-color-btn")
const body = document.querySelector("body")

changeColorBtn.addEventListener("click", () =>{
    const colors = ["green", "red", "blue", "#ccc", "#000"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
})

// document.addEventListener('DOMContentLoaded', function() {
//     const colorBox = document.getElementById('color-box');
//     const changeColorBtn = document.getElementById('change-color-btn');

//     function getRandomColor() {
//         const letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     }

//     changeColorBtn.addEventListener('click', function() {
//         colorBox.style.backgroundColor = getRandomColor();
//     });
// });
