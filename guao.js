meta = document.createElement("meta")
meta.setAttribute("name", "viewport")
meta.setAttribute("content", "width=device-width, initial-scale=1.0")
head = document.getElementsByTagName("head")[0]
head.append(meta)

jQuery(document).ready(function(){
  console.log("jQuery disponible.");
});

/*
var acc = document.getElementsByClassName("menu-437");
var i;

for (i = 0; i < acc.length; i++) {
 acc[i].addEventListener("click", function() {
 this.classList.toggle("active");
var panel = this.nextElementSibling;
 if (panel.style.maxHeight) {
 panel.style.maxHeight = null;
 } else {
 panel.style.maxHeight = panel.scrollHeight + "px";
} 
 });
}

$('.menu-437').click(function(e) {
 e.preventDefault();
//do other stuff when a click happens
});

var x = document.getElementsByClassName("menu-437");
x.addEventListener("click", myFunction);


function myFunction(event) {
  event.stopImmediatePropagation();
  event.preventDefault();
} */