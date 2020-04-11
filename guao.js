meta = document.createElement("meta")
meta.setAttribute("name", "viewport")
meta.setAttribute("content", "width=device-width, initial-scale=1.0")
head = document.getElementsByTagName("head")[0]
head.append(meta)

jQuery(document).ready(function(){
  console.log("jQuery disponible.");
});


                  /* LISTENER */  
        /* CLICK AFUERA PARA QUITAR LA VENTANA*/
                    /*  SIBEBAR  */
window.addEventListener('click', function(event) {
         if (!event.target.matches('.side') ) {
    var sidebar = document.getElementsByClassName("clearfix");
    var i;
    for (i = 0; i < sidebar.length; i++) {
      var openDropdown = sidebar[i];
      if (openDropdown.classList.contains('open')) {
        openDropdown.classList.remove('open');
      }
    }
  }
});
                    /*  INICIO SESION  */
window.addEventListener('click', function(event) {
  if (!event.target.matches('.login')) {
    var dropdowns = document.getElementsByClassName("region-header");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
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

 var a = document.createElement('a');  
 var img = document.createElement('img');  
 img.src="/sites/default/files/icon_fb_0.jpg";
 a.appendChild(img);
 a.href = "https://www.facebook.com/pages/GUAO/462321470499657?fref=ts";  
 document.getElementById("redes").appendChild(a);


 var a = document.createElement('a');  
 var img = document.createElement('img');  
 img.src="/sites/default/files/icon_t_0.jpg";
 a.appendChild(img);
 a.href = "https://twitter.com/Educacionguao";  
 document.getElementById("redes").appendChild(a);


 var a = document.createElement('a');  
 var img = document.createElement('img');  
 img.src="/sites/default/files/icon_yt_0.jpg";
 a.appendChild(img);
 a.href = "http://www.youtube.com/user/PROYECTOGUAO";  
 document.getElementById("redes").appendChild(a);


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
 busqueda.classList = "busqueda";
 var imgb = document.createElement('img');  
 imgb.src="/sites/default/files/home_search.png";
 busqueda.appendChild(imgb);
 busqueda.onclick = function () {
    var x = document.getElementById("page-wrapper");
    var focus = document.getElementById('edit-search-block-form--2').focus();
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
 login.classList = "login";
 login.onclick = function () {
     var x = document.getElementsByClassName("region-header")[0];

     x.classList.toggle("show");

};

 var imglogin = document.createElement('img');  
 imglogin.src="/sites/default/files/login0.png";
 imglogin.classList = "login";
 login.appendChild(imglogin);
 document.getElementById("header").appendChild(login);



  /* BIBLIOTECA */
 /*
 var side =  document.createElement("div");
 side.classList = "side";
 side.id = "side";
 side.onclick = function () {

    var x = document.getElementById("main");
  x.classList.toggle("open");
};
 document.getElementById("main").appendChild(side);*/
/*
var what = document.getElementById("side");
var to = document.getElementById ("page-title");
to.insertBefore (what, to.firstChild);
*/
/*span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>*/


 var side = document.createElement("span");
 side.id = "side";
 side.classList = "side";
 var t = document.createTextNode("🚭 Menu ⚙"); 
 side.appendChild(t);
 side.onclick = function () {
    var x = document.getElementById("main");
  x.classList.toggle("open");
};

 document.getElementById("main").appendChild(side);




/* PARA QUE SE QUEDE AL BAJAR LA PANTALLA*/
window.onscroll = function() {scrollfuction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function scrollfuction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



/*
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("page-title").style.top = "0";
  } else {
    document.getElementById("page-title").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}*/
/*
var l = document.getElementById("block-system-user-menu");
document.getElementById("page").appendChild(l);*/