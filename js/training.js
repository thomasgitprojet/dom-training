/* ------------------------------------ */
/* --- Exercice 1 --- */
const btn = document.querySelector('#ex1 button').addEventListener("click", function(event) {
    const text = document.querySelector("#ex1 .text");
    text.classList.toggle('hidden')
});


/* ------------------------------------ */
/* --- Exercice 2 --- */

document.addEventListener("scroll",function (event) {
    scrollPosition = window.scrollY;
    console.log(scrollPosition);
    const positionScroll = document.querySelector("#ex2-scroll-value");
    console.log(positionScroll);
    positionScroll.innerHTML = scrollPosition;
})


/* ------------------------------------ */
/* --- Exercice 3 --- */
 document.querySelector("#btn3")
 .addEventListener("click", function (event) {
    let firstanimal = document.querySelector("#ex3-animals li");
    document.querySelector("#ex3-animals").appendChild(firstanimal)
});

/* ------------------------------------ */
/* --- Exercice 4 --- */


/* ------------------------------------ */
/* --- Exercice 5 --- */


/* ------------------------------------ */
/* --- Exercice 6 --- */



/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];


/* ------------------------------------ */
/* --- Exercice 8 --- */
