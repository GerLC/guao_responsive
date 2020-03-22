meta = document.createElement("meta")
meta.setAttribute("name", "viewport")
meta.setAttribute("content", "width=device-width, initial-scale=1.0")
head = document.getElementsByTagName("head")[0]
head.append(meta)

jQuery(document).ready(function(){
  console.log("jQuery disponible.");
});


 /* FUNCION PARA EL HAMBURGER , SE REPITEN 3 VECES MOBILE PORTRAIT */
var div = document.createElement("div");
div.id ="hamburger1";
div.onclick = function () {
    var x = document.getElementById("header");

  if (x.style.maxHeight ) {

    x.style.maxHeight = null;
     x.classList.toggle("change");
  } else {

    x.style.maxHeight = 50+ "rem";
  x.classList.toggle("change");
  
  }
};
document.getElementById("header").appendChild(div);

    
var div = document.createElement("div");
div.id = "hamburger2";
div.onclick = function () {
    var x = document.getElementById("header");
  if (x.style.maxHeight ) {

    x.style.maxHeight = null;
     x.classList.toggle("change");
  } else {

    x.style.maxHeight = 50+ "rem";
x.classList.toggle("change");
  
  }
};
document.getElementById("header").appendChild(div);


var div = document.createElement("div");
div.id = "hamburger3";
div.onclick = function () {
    var x = document.getElementById("header");

  if (x.style.maxHeight ) {

    x.style.maxHeight = null;
     x.classList.toggle("change");
  } else {

    x.style.maxHeight = 50+ "rem";
x.classList.toggle("change");
  
  }
};
document.getElementById("header").appendChild(div);
 
 /* FIN */

 /* REDES SOCIALES EN FOOTER  MOBILE PORTRAIT*/
 
 var divfooter = document.createElement('div');  
 divfooter.id = "redes";
 document.getElementById("footer").appendChild(divfooter);
  
 /* FACEBOOK */
 var a = document.createElement('a');  
 var img = document.createElement('img');  
 img.src="/sites/default/files/icon_fb_0.jpg";
 a.appendChild(img);
 a.href = "https://www.facebook.com/pages/GUAO/462321470499657?fref=ts";  
 document.getElementById("redes").appendChild(a);

 /* TWITTER */
 var a = document.createElement('a');  
 var img = document.createElement('img');  
 img.src="/sites/default/files/icon_t_0.jpg";
 a.appendChild(img);
 a.href = "https://twitter.com/Educacionguao";  
 document.getElementById("redes").appendChild(a);

 /* YOUTUBE */
 var a = document.createElement('a');  
 var img = document.createElement('img');  
 img.src="/sites/default/files/icon_yt_0.jpg";
 a.appendChild(img);
 a.href = "http://www.youtube.com/user/PROYECTOGUAO";  
 document.getElementById("redes").appendChild(a);

 /* INSTAGRAM */
 var a = document.createElement('a');  
 var img = document.createElement('img');  
 img.src="/sites/default/files/icon_ig_0.jpg";
 a.appendChild(img);
 a.href = "https://instagram.com/educacionguao/";  
 document.getElementById("redes").appendChild(a);
 
 /*  FIN */ 

 /* BUSQUEDA MOBILE LANDSCAPE */
 
 var busqueda = document.createElement('div');  
 busqueda.id = "busqueda";
 var imgb = document.createElement('img');  
 imgb.src="/sites/default/files/home_search.png";
 busqueda.appendChild(imgb);
 busqueda.onclick = function () {
    var x = document.getElementById("block-search-form");
     var y = document.getElementById("busqueda");
   if ( x.style.transform == "scaleX(0)") {
  x.style.transform = "scaleX(1)"; 
  y.style.transform = "rotate(180deg)";
   }else {
    x.style.transform = "scaleX(0)"; 
    y.style.transform = "rotate(0deg)";
   }
  
};
 document.getElementById("header").appendChild(busqueda);
 
var what = document.getElementById("busqueda");
var to = document.getElementById ("header");
to.insertBefore (what, to.firstChild);