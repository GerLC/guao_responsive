meta = document.createElement("meta")
meta.setAttribute("name", "viewport")
meta.setAttribute("content", "width=device-width, initial-scale=1.0")
head = document.getElementsByTagName("head")[0]
head.append(meta)

jQuery(document).ready(function() {
    console.log("jQuery disponible.");
});

function myFunction(y) {
    var x = document.getElementById("main-menu-links");

    if (x.style.display === "none") {
        x.style.display = "block";

        y.classList.toggle("change");
    } else {
        x.style.display = "none";
        y.classList.toggle("change");
    }
}