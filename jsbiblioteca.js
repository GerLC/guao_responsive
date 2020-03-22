meta = document.createElement("meta")
meta.setAttribute("name", "viewport")
meta.setAttribute("content", "width=device-width, initial-scale=1.0")
head = document.getElementsByTagName("head")[0]
head.append(meta)

jQuery(document).ready(function() {
    console.log("jQuery disponible.");
});

 var btn = document.createElement('button');  
 btn.classList = ("btn big");
 btn.id = "btn";
btn.onclick = function () {
    var x = document.getElementById("sidebar-first");

  if (x.style.width ) {

    x.style.width = null;

  } else {

   x.style.width =  "20%";

  }
};
 document.getElementById("main").appendChild(btn);