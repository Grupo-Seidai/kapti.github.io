var dropDown = document.getElementsByClassName("drop-down");

var div;

for (div of dropDown){
    div.children[0].addEventListener("click",function (event) {
        var parent = event.target.parentElement;

        var topics = parent.children[1];
        
        if (topics.style.display == "block") {
            topics.style.display = "none";
        } else {
            topics.style.display = "block";
        }
    });
}
