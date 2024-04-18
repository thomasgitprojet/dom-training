
const ingredients = ["🍅", "🥑", "🥕", "🌽", "🌶️", "🥦", "🥒", "🍄", "🧄", "🧅", "🧀", "🍠", "🥚", "🥬"];


const ul = document.querySelector("#salad-ingredients");

for (let ingredient of ingredients) {
    const li = document.createElement("li");
    let btn = document.createElement("button");
    btn.classList.add("button")
    btn.innerHTML = ingredient;
    li.appendChild(btn)
    ul.appendChild(li)
}