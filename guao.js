var meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width");
var head = document.getElementsByTagName("head")[0];
head.append(meta);

/*
var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);
    
    function appendText() {
  var txt1 = "<p>Text.</p>";               // Create element with HTML 
  var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
  var txt3 = document.createElement("p");  // Create with DOM
  txt3.innerHTML = "Text.";
  $("#blockbuttonid1").append(txt1, txt2, txt3);      // Append the new elements
}

appendText()*/
/* LISTENER */
/* CLICK AFUERA PARA QUITAR LA VENTANA*/
/*  SIBEBAR  */

window.addEventListener("click", function (event) {
  if (
    !event.target.matches(".side") &&
    !event.target.matches(".form-text") &&
    !event.target.matches(".region-sidebar-first") &&
    !event.target.matches(".views-exposed-widgets") &&
    !event.target.matches(".block") &&
    !event.target.matches(".block-views") &&
    !event.target.matches(".views-exposed-form") &&
    !event.target.matches(".views-widget-filter-populate")
  ) {
    var sidebar = document.getElementsByClassName("clearfix");

    for (i = 0; i < sidebar.length; i++) {
      var openDropdown = sidebar[i];
      if (openDropdown.classList.contains("open")) {
        openDropdown.classList.remove("open");
      }
    }
  }
});
/*  INICIO SESION  */
window.addEventListener("click", function (event) {
  if (!event.target.matches(".login")) {
    /* var dropdowns = document.getElementsByClassName("region-header");*/
    var dropdowns = document.getElementsByClassName("section");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
});

/* FUNCION PARA EL HAMBURGER , SE REPITEN 3 VECES MOBILE PORTRAIT */
var divclass = document.createElement("div");
divclass.classList = "hamburger";
divclass.id = "hamburgerid";
divclass.onclick = function () {
  /*  var x = document.getElementById("header");

  if (x.style.maxHeight ) {

    x.style.maxHeight = null;
    x.classList.toggle("change");
  } else {

    x.style.maxHeight = 50+ "rem";
  x.classList.toggle("change");
  
  }*/

  /* nuevo menu */

  var x = document.getElementById("main");
  var y = document.getElementById("header");
  var z = document.getElementById("page");

  if (z.style.marginLeft) {
    z.style.marginLeft = null;
    x.classList.toggle("change");
    y.classList.toggle("change");
  } else {
    z.style.marginLeft = "95%";
    x.classList.toggle("change");
    y.classList.toggle("change");
  }
};
document.getElementsByClassName("section")[0].appendChild(divclass);

var what = document.getElementById("hamburgerid");
var to = document.getElementsByClassName("section")[0];
to.insertBefore(what, to.firstChild);

var div = document.createElement("div");
div.id = "hamburger1";

document.getElementById("hamburgerid").appendChild(div);

var div = document.createElement("div");
div.id = "hamburger2";

document.getElementById("hamburgerid").appendChild(div);

var div = document.createElement("div");
div.id = "hamburger3";

document.getElementById("hamburgerid").appendChild(div);

/* FIN */

/* REDES SOCIALES EN FOOTER  MOBILE PORTRAIT*/

var divfooter = document.createElement("div");
divfooter.id = "redes";
document.getElementById("footer").appendChild(divfooter);

var a = document.createElement("a");
var img = document.createElement("img");
img.src = "/sites/default/files/icon_fb_0.jpg";
a.appendChild(img);
a.href = "https://www.facebook.com/pages/GUAO/462321470499657?fref=ts";
document.getElementById("redes").appendChild(a);

var a = document.createElement("a");
var img = document.createElement("img");
img.src = "/sites/default/files/icon_t_0.jpg";
a.appendChild(img);
a.href = "https://twitter.com/Educacionguao";
document.getElementById("redes").appendChild(a);

var a = document.createElement("a");
var img = document.createElement("img");
img.src = "/sites/default/files/icon_yt_0.jpg";
a.appendChild(img);
a.href = "http://www.youtube.com/user/PROYECTOGUAO";
document.getElementById("redes").appendChild(a);

var a = document.createElement("a");
var img = document.createElement("img");
img.src = "/sites/default/files/icon_ig_0.jpg";
a.appendChild(img);
a.href = "https://instagram.com/educacionguao/";
document.getElementById("redes").appendChild(a);

/*  FIN */

/* BUSQUEDA MOBILE LANDSCAPE */
var busqueda = document.createElement("div");
busqueda.id = "busqueda";
busqueda.classList = "busqueda";

document.getElementsByClassName("section")[0].appendChild(busqueda);

var busquedaimg = document.createElement("div");
busquedaimg.id = "busquedaimg";
document.getElementById("busqueda").appendChild(busquedaimg);
var imgb = document.createElement("img");
imgb.src = "/sites/default/files/home_search.png";
busquedaimg.appendChild(imgb);

var div = document.createElement("div");
div.id = "busquedaX";
document.getElementById("busqueda").appendChild(div);

var div = document.createElement("div");
div.id = "busquedaX1";
document.getElementById("busqueda").appendChild(div);
div.onclick = function () {
  var x = document.getElementById("page-wrapper").classList.toggle("changeb");
};

busquedaimg.onclick = function () {
  var x = document.getElementById("page-wrapper");
  var y = document.getElementById("busquedaimg");
  var focus = document.getElementById("edit-search-block-form--2");

  /*
   if ( y.style.transform == "scaleY(0)") */
  if (y.style.display == "none") {
    x.classList.toggle("changeb");
    focus.blur();
  } else {
    x.classList.toggle("changeb");
    focus.focus();
  }
};

/* INICIO SESION DROPDOWN */
var bloquelogin = document.getElementById("block-system-user-menu");
var login = document.createElement("div");
login.id = "login";
login.classList = "login";
login.onclick = function () {
  /* var x = document.getElementsByClassName("region-header")[0];*/
  var x = document.getElementsByClassName("section")[0];

  x.classList.toggle("show");
};

var imglogin = document.createElement("img");
imglogin.src = "/sites/default/files/login0.png";
imglogin.classList = "login";
login.appendChild(imglogin);
document.getElementsByClassName("section")[0].appendChild(login);
/* document.getElementById("header").appendChild(login);
 */

/* BIBLIOTECA */
/*
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
 var to = document.getElementById("main");
 to.insertBefore (what, to.firstChild);*/

/* PARA QUE SE QUEDE AL BAJAR LA PANTALLA*/
window.onscroll = function () {
  scrollfuction();
};

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
blockbutton.classList = "blockbuttonhome";
document.getElementById("main").appendChild(blockbutton);

var what = document.getElementsByClassName("blockbuttonhome")[0];
var to = document.getElementById("main");
to.insertBefore(what, to.firstChild);

var blockbutton1 = document.createElement("button");
blockbutton1.id = "blockbuttonid1";
document.getElementsByClassName("blockbuttonhome")[0].appendChild(blockbutton1);
var blockbutton2 = document.createElement("button");
blockbutton2.id = "blockbuttonid2";
document.getElementsByClassName("blockbuttonhome")[0].appendChild(blockbutton2);
var blockbutton3 = document.createElement("button");
blockbutton3.id = "blockbuttonid3";
document.getElementsByClassName("blockbuttonhome")[0].appendChild(blockbutton3);

var span = document.createElement("span");
var arrow = document.createTextNode("︾");
span.id = "angle-arrow-down";
span.appendChild(arrow);
blockbutton1.appendChild(span);

var block1 = document.getElementById("main-wrapper");

blockbutton1.onclick = function () {
  block1.classList.toggle("open1");
  block1.classList.remove("open2");
  block1.classList.remove("open3");
};

blockbutton2.onclick = function () {
  block1.classList.toggle("open2");
  block1.classList.remove("open1");
  block1.classList.remove("open3");
};
blockbutton3.onclick = function () {
  block1.classList.toggle("open3");
  block1.classList.remove("open1");
  block1.classList.remove("open2");
};

var mainmenu = document.getElementById("main-menu").cloneNode(true);
mainmenu.id = "mainmenu";

var secmenu = document
  .getElementById("block-menu-menu-men-secundario")
  .cloneNode(true);
secmenu.id = "secmenu";

var logo = document.getElementById("logo").cloneNode(true);

var sidenav = document.createElement("div");
sidenav.id = "sidebar";
sidenav.classList = "navigation";
document.getElementById("main").appendChild(sidenav);
document
  .getElementById("main")
  .insertBefore(sidenav, document.getElementById("main").firstChild);

sidenav.insertBefore(mainmenu, sidenav.firstChild);
sidenav.appendChild(document.createElement("hr"));
sidenav.appendChild(secmenu);
sidenav.appendChild(document.createElement("hr"));

if (document.URL.indexOf("https://guao.org/biblioteca") >= 0) {
  var sidebarfirst = document.getElementById("sidebar-first").cloneNode(true);
  sidebarfirst.id = "sidebarfirst";

  sidenav.appendChild(sidebarfirst);
  var biblio_title = document.createElement("h2");
  biblio_title.id = "title_biblioteca";
  biblio_title.innerHTML = "Biblioteca";
  var biblio = document.getElementById("block-views-exp-library-page-1");
  biblio.insertBefore(biblio_title, biblio.firstChild);
}

if (document.URL.indexOf("https://guao.org/buenas_practicas") >= 0) {
  var sidebarfirst = document.getElementById("sidebar-first").cloneNode(true);
  sidebarfirst.id = "sidebarfirst";

  sidenav.appendChild(sidebarfirst);
  const innovaciones = document.getElementById(
    "block-views-exp-buenas-pr-cticas-page-1"
  );
  const innovaciones_title = document.createElement("h2");
  innovaciones_title.id = "title_innovaciones";
  innovaciones_title.innerHTML = "Innovaciones Educativas";
  innovaciones.insertBefore(innovaciones_title, innovaciones.firstChild);
}

if (document.URL.indexOf("https://guao.org/portafolio-docente") >= 0) {
  var sidebarfirst = document.getElementById("sidebar-first").cloneNode(true);
  sidebarfirst.id = "sidebarfirst";

  sidenav.appendChild(sidebarfirst);
  const portafolio = document.getElementById(
    "block-views-exp-portafolio-docente-page-1"
  );
  const portafolio_title = document.createElement("h2");
  portafolio_title.id = "title_portafolio";
  portafolio_title.innerHTML = "Portafolio Docente";
  portafolio.insertBefore(portafolio_title, portafolio.firstChild);
}

if (
  document.URL.indexOf("https://guao.org/primer_grado/") >= 0 ||
  document.URL.indexOf("https://guao.org/segundo_grado/") >= 0 ||
  document.URL.indexOf("https://guao.org/tercer_grado/") >= 0 ||
  document.URL.indexOf("https://guao.org/cuarto_grado/") >= 0 ||
  document.URL.indexOf("https://guao.org/quinto_grado/") >= 0 ||
  document.URL.indexOf("https://guao.org/sexto_grado/") >= 0 ||
  document.URL.indexOf("https://guao.org/primer_ano/") >= 0 ||
  document.URL.indexOf("https://guao.org/segundo_ano/") >= 0 ||
  document.URL.indexOf("https://guao.org/tercer_ano/") >= 0 ||
  document.URL.indexOf("https://guao.org/cuarto_ano/") >= 0 ||
  document.URL.indexOf("https://guao.org/quinto_ano/") >= 0 ||
  document.URL.indexOf("https://guao.org/nosotros/") >= 0 ||
  document.URL.indexOf("https://guao.org/docentes/primer_ano/") >= 0 ||
  document.URL.indexOf("https://guao.org/docentes/segundo_ano/") >= 0 ||
  document.URL.indexOf("https://guao.org/docentes/tercer_ano/") >= 0 ||
  document.URL.indexOf("https://guao.org/docentes/cuarto_ano/") >= 0 ||
  document.URL.indexOf("https://guao.org/docentes/quinto_ano/") >= 0
) {
  var sidebarfirst = document.getElementById("sidebar-first").cloneNode(true);
  sidebarfirst.id = "sidebarfirst";

  sidenav.appendChild(sidebarfirst);
}

sidenav.insertBefore(logo, sidenav.firstChild);
