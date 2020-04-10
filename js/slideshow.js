function bannerSlideShow() {
    var slideShow = document.getElementById("slideshow");

    var slideShowImages = slideShow.children;

    for (image = 0 ; image < slideShowImages.length ; image++){
        if (slideShowImages[image].classList.contains("active")) {
            if (image == slideShowImages.length-1) {
                slideShowImages[image].classList.remove("active");
                slideShowImages[image].classList.add("inactive");
                slideShowImages[0].classList.remove("inactive");
                slideShowImages[0].classList.add("active");
                break;
            } else {
                slideShowImages[image].classList.remove("active");
                slideShowImages[image].classList.add("inactive");
                slideShowImages[image+1].classList.remove("inactive");
                slideShowImages[image+1].classList.add("active");
                break;
            }
        }
    }
    
}


var interval = setInterval(bannerSlideShow, 5000);
bannerSlideShow();

function bannerSlideShowInverse() {
    var slideShow = document.getElementById("slideshow");

    var slideShowImages = slideShow.children;

    for (image = 0 ; image < slideShowImages.length ; image++){
        if (slideShowImages[image].classList.contains("active")) {
            if (image == 0) {
                slideShowImages[image].classList.remove("active");
                slideShowImages[image].classList.add("inactive");
                slideShowImages[slideShowImages.length-1].classList.remove("inactive");
                slideShowImages[slideShowImages.length-1].classList.add("active");
                break;
            } else {
                slideShowImages[image].classList.remove("active");
                slideShowImages[image].classList.add("inactive");
                slideShowImages[image-1].classList.remove("inactive");
                slideShowImages[image-1].classList.add("active");
                break;
            }
        }
    }
    
}

var back = document.getElementsByClassName("back-buttons");
var forward = document.getElementsByClassName("forward-buttons");

var b, f;

for (b of back) {
    b.addEventListener("click",bannerSlideShowInverse);
}

for (f of forward) {
    f.addEventListener("click",bannerSlideShow);
}
