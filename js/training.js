/* ------------------------------------ */
/* --- Exercice 1 --- */
const btn = document.querySelector('#ex1 button').addEventListener("click", function(event) {
    const text = document.querySelector("#ex1 .text");
    text.classList.toggle('hidden')
});


/* ------------------------------------ */
/* --- Exercice 2 --- */

document.addEventListener("scroll",function (event) {
    const positionScroll = document.querySelector("#ex2-scroll-value");
    positionScroll.textContent = Math.floor(window.scrollY);
})


/* ------------------------------------ */
/* --- Exercice 3 --- */
 document.querySelector("#btn3")
 .addEventListener("click", function (event) {
    document.querySelector("#ex3-animals").appendChild(document.querySelector("#ex3-animals li"))
});

/* ------------------------------------ */
/* --- Exercice 4 --- */
let count = 0;
document.querySelector("#ex4 .button").addEventListener("click", function (event) {
        this.classList.add("blue");
        count++;
    console.log(document.querySelector("#ex4 .button").className);
    console.log(count);
    if(count === 2) {
        this.classList.add("red");
    }
    if(count === 3) {
        this.classList.add("green")
    }
    if (count > 3) {
        this.classList.remove("red", "green");
        count = 0;
    }
})

/* ------------------------------------ */
/* --- Exercice 5 --- */
function random_bg_color(event) {
    // Generate random values for red, green, and blue components between 0 and 255.
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    // Construct the RGB color string.
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    // Output the generated color to the console.
    // console.log(bgColor);
    event.target.style.background = bgColor;;
}


for(let btn of document.querySelectorAll("#ex5 button")) {
    btn.addEventListener("mouseover", function (event) {    
    random_bg_color(event);
    })
}


/* ------------------------------------ */
/* --- Exercice 6 --- */

// const text = document.querySelector("#ex6 .exercice-txt");
// console.log(text);
const text = document.querySelector("#ex6-paragraph").innerHTML.trim();
const letters = text.split("");
document.querySelector("#ex6-paragraph").innerHTML = "";

letters.forEach((letter, i) => {
    setTimeout(() => document.querySelector("#ex6-paragraph").innerHTML += letter, i * 50)
});




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

const btnAddTask = document.querySelector("#ex7-button");

/**
 * creat and add element at element of dom
 * @param {array} array array of news tasks
 * @param {Element} lstElement element of list of news tasks
 */
function addTaskLst (array, lstElement) {
    const newLi = document.createElement("li"); 
    newLi.innerHTML = array.shift();
    newLi.setAttribute("class", "task-list-task");
    lstElement.appendChild(newLi);
}

/**
 * add element in the dom on click
 * @returns 
 */
function addNextTask () {
    if (taskList.length < 1) {
        btnAddTask.removeEventListener("click", addNextTask);
        return;
    }

    addTaskLst(taskList, document.querySelector("#ex7-list"))
}

btnAddTask.addEventListener("click", addNextTask)


/* ------------------------------------ */
/* --- Exercice 8 --- */

 const level = document.querySelector("#ex8-button-level");
// const strength = document.querySelector("#ex8-button-strength");
// const shield = document.querySelector("#ex8-button-shield");
// console.log(level, strength, shield);

const levelProgress = document.querySelector("#ex8-level");
// console.log(levelProgress);

let widthStyle = 0;

function pexXp (element) {
    element.style.width = widthStyle + "%";
}

function addXpInProgress (element, btn) {
    if (element.style.width === 100 + "%") {
        btn.removeEventListener("click", addXpInProgress);
        return;
    }
    widthStyle += 5;
    pexXp(element);
}

level.addEventListener("click", addXpInProgress(levelProgress, level));
// console.log(addXpInProgress());

console.log(levelProgress.style.width);

// level.addEventListener("click", function(e) {
//     levelProgress.style.width = `${width}%`;
//     width += 5;
//     console.log(width);
// })
