var filterButtons = document.getElementsByClassName("filter-button");

var infoButtons = document.getElementsByClassName("info");

var div;

for (div of filterButtons){
    div.addEventListener("click", function (event) {
        var filter = event.target.parentElement.parentElement;

        if (filter.id == "filter-all"){
            var filters = document.getElementsByClassName("filter-button");
            var filter_a;

            if (filter.classList.contains("active")) {
                for (filter_a of filters){
                    filter_a.classList.remove("active");
                    filter_a.classList.add("inactive");
                }
            } else {
                for (filter_a of filters){
                    filter_a.classList.remove("inactive");
                    filter_a.classList.add("active");
                }
            }
        } else {
            if (filter.classList.contains("active")) {
                filter.classList.remove("active");
                filter.classList.add("inactive");
            } else {
                filter.classList.remove("inactive");
                filter.classList.add("active");
            }
        }
        updateFilters();
    })
}

function updateFilters () {
    var seminarios = document.getElementsByClassName("Seminario");

    var card;

    for (card of seminarios){
        var classes = card.classList;

        var current;

        for (current of classes) {
            if (current == "Seminario" || current == "float-left" || current == "col-quarter" || current == "center" || current == "active" || current == "inactive"){
                continue;
            }

            if (document.getElementById(current).classList.contains("active")){
                card.classList.add("active");
                card.classList.remove("inactive");
                break;
            }

            card.classList.remove("active");
            card.classList.add("inactive");
        }


    }
}

for (div of infoButtons) {
    div.addEventListener("click", function (event) {
        var parent = event.target.parentElement.parentElement.parentElement;

        var card = parent.children[0];

        var description = parent.children[1];

        console.log(parent)
        console.log(description)
        console.log(card)

        if (description.classList.contains("active")){
            description.classList.remove("active");
            description.classList.add("inactive");
            parent.classList.remove("complete");
            parent.classList.add("col-quarter");
            card.classList.remove("col-quarter");
            card.classList.add("complete");
        } else {
            description.classList.add("active");
            description.classList.remove("inactive");
            description.classList.add("col-quarter");
            parent.classList.remove("col-quarter");
            parent.classList.add("complete");
            card.classList.remove("complete");
            card.classList.add("col-quarter");
        }

    })
}
