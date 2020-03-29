meta = document.createElement("meta")
meta.setAttribute("name", "viewport")
meta.setAttribute("content", "width=device-width, initial-scale=1.0")
head = document.getElementsByTagName("head")[0]
head.append(meta)

jQuery(document).ready(function(){
  console.log("jQuery disponible.");
});


 /* FUNCION PARA EL HAMBURGER , SE REPITEN 3 VECES MOBILE PORTRAIT */
var divclass =  document.createElement("div");
divclass.classList = "hamburger";
divclass.id = "hamburgerid";
divclass.onclick = function () {
    var x = document.getElementById("header");

  if (x.style.maxHeight ) {

    x.style.maxHeight = null;
    x.classList.toggle("change");
  } else {

    x.style.maxHeight = 50+ "rem";
  x.classList.toggle("change");
  
  }
};
document.getElementById("header").appendChild(divclass);
 
var div = document.createElement("div");
div.id ="hamburger1";

document.getElementById("hamburgerid").appendChild(div);

    
var div = document.createElement("div");
div.id = "hamburger2";

document.getElementById("hamburgerid").appendChild(div);


var div = document.createElement("div");
div.id = "hamburger3";

document.getElementById("hamburgerid").appendChild(div);
 
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
    var x = document.getElementById("header");

   if ( x.style.transform == "scaleX(0)") {
  

   x.classList.toggle("changeb");


   }else {

    x.classList.toggle("changeb");

    }
 
};

 document.getElementById("header").appendChild(busqueda);
 
 var div = document.createElement("div");
 div.id ="busquedaX";
 document.getElementById("busqueda").appendChild(div);
 
 var div = document.createElement("div");
 div.id ="busquedaX1";
 document.getElementById("busqueda").appendChild(div);

var what = document.getElementById("busqueda");
var to = document.getElementById ("header");
to.insertBefore (what, to.firstChild);

 
  /* INICIO SESION DROPDOWN */
 var bloquelogin = document.getElementById("block-system-user-menu");
 var login = document.createElement('div');  
 login.id = "login";
 login.classList = "login"
 login.onclick = function () {
    var x = document.getElementById("block-system-user-menu");

   if ( x.style.display == "none") {
  

 /*  x.classList.toggle("show");*/
    x.style.display = "inline-block";

   }else {

 /*   x.classList.toggle("show");*/
    x.style.display = "none";
    }
 
};

 var imglogin = document.createElement('img');  
 imglogin.src="/sites/default/files/login0.png";
 login.appendChild(imglogin);
 document.getElementById("header").appendChild(login);





 

  /* BIBLIOTECA */
    
 var circle = document.createElement("div");
 circle.id = "circle";
 document.getElementById("main").appendChild(circle);
 
 var side =  document.createElement("div");
 side.classList = "side";
 side.id = "side";
 side.onclick = function () {
    var x = document.getElementById("sidebar-first");
    var y = document.getElementById("side");

   if ( y.style.transform == "rotate(-225deg)") {
 /* x.style.width = "scaleX(1)"; */
  x.style.width = "0";
  y.style.transform = "rotate(-45deg)";
 
   }else {
 /*   x.style.transform = "scaleX(0)"; */
 x.style.width = "97%";
    y.style.transform = "rotate(-225deg)";

   }
  
};
 document.getElementById("main").appendChild(side);
 
var what = document.getElementById("side");
var to = document.getElementById ("main");
to.insertBefore (what, to.firstChild);

