const imgs = document.querySelectorAll(".thumbs-img");
const bigImg = document.querySelector("#gallery-picture");
const titleText = document.querySelector("#gallery-title");
const descriptionImg = document.querySelector("#gallery-description");

/**
 * Display image, title and description when the miniatur is over
 * @param {string} title title of image
 * @param {string} description description of image
 * @param {string} src url of image
 */
function displayImgTltDescp (title, description, src) {
    bigImg.setAttribute("src", src);
    titleText.textContent = title;
    descriptionImg.textContent = description;
}

for (const img of imgs) {
    img.addEventListener("mouseover", function(e) {
        let dataTitle = img.dataset.title;
        let dataDescription = img.dataset.description;
        let src = img.currentSrc;
        // console.log(src);
        displayImgTltDescp(dataTitle, dataDescription, src);
    })  
}

