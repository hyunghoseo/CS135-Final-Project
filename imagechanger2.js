var imageArray = ['images2/aishwarya-rai-in-sanjay-leela-bhansalis-next.jpg', 'images2/aziz.jpg', 'images2/cat-yoga.jpg', 'images2/contractors.jpg', 'images2/doghw1.png', 'images2/fabiobike.jpg', 'images2/john-cena.jpg', 'images2/julieandrews.jpg', 'images2/ladyeatingsalad.jpg', 'images2/squirrel.jpg', 'images2/workingwoman.jpg', 'images2/zacefron.jpg'];
var imageIndex = 0;

function fadeImage(el, val, fade) {
    if (fade === true) {
        val = val - 1;
    } else {
        val = val + 1;
    }

    if (val > 0 && val < 100) {
        el.style.opacity = val / 100;
    }
}

function nextImage(element) {
    var image = document.getElementById(element);
    imageIndex = (imageIndex+1) % imageArray.length;
    image.src = imageArray[imageIndex];
    fadeImage(image, 100, true);
}

window.onload = setInterval(function() {
    nextImage("changing_image");
}, 4500);