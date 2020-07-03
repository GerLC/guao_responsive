meta = document.createElement("meta")
meta.setAttribute("name", "viewport")
meta.setAttribute("content", "width=device-width")
head = document.getElementsByTagName("head")[0]
head.append(meta)
/*
jQuery(document).ready(function(){
  console.log("jQuery disponible.");
});
*/

                  /* LISTENER */  
        /* CLICK AFUERA PARA QUITAR LA VENTANA*/
                    /*  SIBEBAR  */

window.addEventListener('click', function(event) {
         if (!event.target.matches('.side') && !event.target.matches('.form-text') && !event.target.matches('.region-sidebar-first') && !event.target.matches('.views-exposed-widgets')  && !event.target.matches('.block')   && !event.target.matches('.block-views') && !event.target.matches('.views-exposed-form')  && !event.target.matches('.views-widget-filter-populate')    ) {
    var sidebar = document.getElementsByClassName("clearfix");
    
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
document.getElementsByClassName("section")[0].appendChild(divclass);
/*document.getElementById("header").appendChild(divclass);*/
 
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
 
 document.getElementsByClassName("section")[0].appendChild(busqueda);
 
 var busquedaimg = document.createElement('div');  
 busquedaimg.id = "busquedaimg";
 document.getElementById("busqueda").appendChild(busquedaimg);
 var imgb = document.createElement('img');  
 imgb.src="/sites/default/files/home_search.png";
 busquedaimg.appendChild(imgb);
 
 
 var div = document.createElement("div");
 div.id ="busquedaX";
 document.getElementById("busqueda").appendChild(div);
 
 var div = document.createElement("div");
 div.id ="busquedaX1";
 document.getElementById("busqueda").appendChild(div);
 div.onclick = function () {
    var x = document.getElementById("page-wrapper").classList.toggle("changeb");;
 }
 
 busquedaimg.onclick = function () {
    var x = document.getElementById("page-wrapper");
    var y = document.getElementById("busquedaimg");
    var focus = document.getElementById('edit-search-block-form--2');

/*
   if ( y.style.transform == "scaleY(0)") */
  if ( y.style.display == "none") {
   
   x.classList.toggle("changeb");
            focus.blur();
 

   }else {

    x.classList.toggle("changeb");

          focus.focus();
    }
 
};
 
 
 
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
 document.getElementsByClassName("section")[0].appendChild(login);
/* document.getElementById("header").appendChild(login);
*/

  /* BIBLIOTECA */

 var side = document.createElement("span");
 side.id = "side";
 side.classList = "side";
 var t = document.createTextNode("✏"); 
 side.appendChild(t);
 side.onclick = function () {
    var x = document.getElementById("main");
	x.classList.toggle("open");
};


 document.getElementById("main").appendChild(side);

 var what = document.getElementById("side");
 var to = document.getElementById ("main");
 to.insertBefore (what, to.firstChild);

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


/* HOME BLOCKS */


var blockbutton = document.createElement("div");
blockbutton.classList = "blockbuttonhome"
document.getElementsByClassName("content clearfix")[0].appendChild(blockbutton);

var blockbutton1 = document.createElement("button");
blockbutton1.id = "blockbuttonid1";
document.getElementsByClassName("blockbuttonhome")[0].appendChild(blockbutton1);
var blockbutton2 = document.createElement("button");
blockbutton2.id = "blockbuttonid2";
document.getElementsByClassName("blockbuttonhome")[0].appendChild(blockbutton2);
var blockbutton3 = document.createElement("button");
blockbutton3.id = "blockbuttonid3";
document.getElementsByClassName("blockbuttonhome")[0].appendChild(blockbutton3);


var block1 =  document.getElementsByClassName("content clearfix")[0];

blockbutton1.onclick = function () {
	block1.classList.toggle("open1");
	block1.classList.remove('open2');
	block1.classList.remove('open3');
}

blockbutton2.onclick = function () {
	block1.classList.toggle("open2");
	block1.classList.remove('open1');
	block1.classList.remove('open3');
}
blockbutton3.onclick = function () {
	block1.classList.toggle("open3");
	block1.classList.remove('open1');
	block1.classList.remove('open2');
}




