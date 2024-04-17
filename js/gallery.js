const imgs = document.querySelectorAll(".thumbs-img")
console.log(imgs);

const bigImg = document.querySelector("#gallery-picture")
console.log(bigImg);

// imgs[i].addEventListener("mouseover", function(e) {
    
// })



function displayImg (title, description, src) {
    bigImg.setAttribute("src", src)
}

for (const img of imgs) {
    img.addEventListener("mouseover", function(e) {
        let dataTitle = img.dataset.title
        let dataDescription = img.dataset.description
        let src = img.currentSrc
        // console.log(src);
        displayImg(dataTitle, dataDescription, src)
    })  
}

