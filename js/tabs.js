const links = document.querySelectorAll(".tabs-link");
const articles = document.querySelectorAll("[data-tab-content]")

function addClassActive(element) {
    element.classList.toggle("active")
    console.log(element.dataset.tab);
    let selector = element.dataset.tab;
    let showArticle = document.querySelector(`#${selector}`);
    showArticle.classList.toggle("hidden");
    hiddenArticle(showArticle)
}

function removeClassActive(array, element) {
    for (data of array) {
        if (!(data.dataset.tab === element.dataset.tab)) {
            data.className = "tabs-link"
        }
    }
}

function hiddenArticle(showArticle) {
    for (let hidden of articles) {
        if (!(showArticle.classList === hidden.classList)) {
            hidden.classList = "tab-content-item hidden"
        }
    }
}

for (let onglet of links) {
    onglet.addEventListener("click", function (e) {
        addClassActive(onglet)
        removeClassActive(links, onglet)
    })
}

for (let article of articles) {
    article.classList.add("hidden");
}
