meta = document.createElement("meta")
meta.setAttribute("name", "viewport")
meta.setAttribute("content", "width=device-width, initial-scale=1.0")
head = document.getElementsByTagName("head")[0]
head.append(meta)

jQuery(document).ready(function(){
  console.log("jQuery disponible.");
});


 /* FUNCION PARA EL HAMBURGER , SE REPITEN 3 VECES */
var div = document.createElement("div");
div.id ="hamburger1";
div.onclick = function () {
    var x = document.getElementById("header");

  if (x.style.maxHeight ) {

    x.style.maxHeight = null;


  } else {

    x.style.maxHeight = 50+ "rem";


  }
};
document.getElementById("header").appendChild(div);

    
var div = document.createElement("div");
div.id = "hamburger2";
div.onclick = function () {
    var x = document.getElementById("header");
  
  if (x.style.maxHeight ) {

    x.style.maxHeight = null;


  } else {

    x.style.maxHeight = 50+ "rem";

  }
};
document.getElementById("header").appendChild(div);


var div = document.createElement("div");
div.id = "hamburger3";
div.onclick = function () {
    var x = document.getElementById("header");

  if (x.style.maxHeight ) {

    x.style.maxHeight = null;

  } else {

    x.style.maxHeight = 50+ "rem";

  
  }
};
document.getElementById("header").appendChild(div);




/* ESTO ES PARA INSERTAR EL VALOR AL PRINCIPIO DE TOODO
  var what = document.getElementById("hamburger1");
            var to = document.getElementById ("header");
            to.insertBefore (what, to.firstChild);
            
  var what1 = document.getElementById("hamburger2");
            var to1 = document.getElementById ("header");
            to1.insertBefore (what1, to.firstChild);

 var what2 = document.getElementById("hamburger3");
            var to2 = document.getElementById ("header");
            to2.insertBefore (what2, to.firstChild);
*/


 /* REDES SOCIALES EN FOOTER */
 
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


