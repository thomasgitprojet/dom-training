const links = document.querySelectorAll(".tabs-link");
console.log(links);


function addClassActive (element) {
    element.classList.toggle("active")
    console.log(element.dataset.tab);

}

function removeClassActive (array, element) {
    for (data of array) {
        if (!(data.dataset.tab === element.dataset.tab)) {
            data.className = "tabs-link"
        }
    }
}

for(let onglet of links) {
    onglet.addEventListener("click", function(e) {
        addClassActive(onglet)
        removeClassActive(links, onglet)
    })
}