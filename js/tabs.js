const links = document.querySelectorAll(".tabs-link");
const articles = document.querySelectorAll("[data-tab-content]")

/**
 * add class active and remove class hidden
 * @param {element} element link of nav with class "tabs"
 */
function addClassActiveAndRemoveHidden(element) {
    element.classList.toggle("active")
    console.log(element.dataset.tab);
    let selector = element.dataset.tab;
    let showArticle = document.querySelector(`#${selector}`);
    showArticle.classList.toggle("hidden");
    hiddenArticle(showArticle)
}

/**
 * supp class active 
 * @param {array} array array links of of nav with class "tabs"
 * @param {element} element link of nav with class "tabs"
 */
function removeClassActive(array, element) {
    for (data of array) {
        if (!(data.dataset.tab === element.dataset.tab)) {
            data.className = "tabs-link"
        }
    }
}

/**
 * add class hidden
 * @param {element} showArticle article with the class hidden = false
 */
function hiddenArticle(showArticle) {
    for (let hidden of articles) {
        if (!(showArticle.classList === hidden.classList)) {
            hidden.classList = "tab-content-item hidden"
        }
    }
}

for (let onglet of links) {
    onglet.addEventListener("click", function (e) {
        addClassActiveAndRemoveHidden(onglet)
        removeClassActive(links, onglet)
    })
}

for (let article of articles) {
    article.classList.add("hidden");
}
