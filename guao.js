var meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width");
var head = document.getElementsByTagName("head")[0];
head.append(meta);
					
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

var loader = document.createElement("span");

var loaderIn = document.createElement("span");

loader.appendChild(loaderIn);

var loaderWrapper = document.createElement("div");

loaderWrapper.appendChild(loader);
loaderWrapper.classList = "loader-wrapper";

var to = document.getElementsByClassName("html")[0];
to.insertBefore(loaderWrapper, to.firstChild);
var fade = document.getElementsByClassName("loader-wrapper")[0];

window.addEventListener('beforeunload', (event) => {
           loader.classList = "loader";
           loaderIn.classList = "loader-inner";
           fade.style.opacity = .9;
        });
 
window.addEventListener('DOMContentLoaded', (event) => {
           fade.style.opacity = 0;
           loader.classList.remove("loader");
           loaderIn.classList.remove("loader-inner");
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
var divClass = document.createElement("div");
divClass.id = "hamburger-id";
divClass.classList = "hamburger";
divClass.onclick = function () {

  var x = document.getElementById("main");
  var y = document.getElementById("header");
  var z = document.getElementById("page-wrapper");

  if (z.style.marginLeft) {
    z.classList.toggle("change");
    x.classList.toggle("change");
    y.classList.toggle("change");
  } else {
    z.classList.toggle("change");
    x.classList.toggle("change");
    y.classList.toggle("change");
  }
};
document.getElementsByClassName("section")[0].appendChild(divClass);

var what = document.getElementById("hamburger-id");
var to = document.getElementsByClassName("section")[0];
to.insertBefore(what, to.firstChild);

var div = document.createElement("div");
div.id = "hamburger-1";

document.getElementById("hamburger-id").appendChild(div);

var div = document.createElement("div");
div.id = "hamburger-2";

document.getElementById("hamburger-id").appendChild(div);

var div = document.createElement("div");
div.id = "hamburger-3";

document.getElementById("hamburger-id").appendChild(div);

/* FIN */

/* REDES SOCIALES EN FOOTER  MOBILE PORTRAIT*/

var divFooter = document.createElement("div");
divFooter.id = "redes";
document.getElementById("block-block-10").querySelectorAll('[class="content"]')[0].appendChild(divFooter);

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

var busquedaImg = document.createElement("div");
busquedaImg.id = "busqueda-img";
document.getElementById("busqueda").appendChild(busquedaImg);
var imgb = document.createElement("img");
imgb.src = "/sites/default/files/home_search.png";
busquedaImg.appendChild(imgb);

var div = document.createElement("div");
div.id = "busquedaX";
document.getElementById("busqueda").appendChild(div);

var div = document.createElement("div");
div.id = "busquedaX1";
document.getElementById("busqueda").appendChild(div);
div.onclick = function () {
  var x = document.getElementById("page-wrapper").classList.toggle("changeb");
};

busquedaImg.onclick = function () {
  var x = document.getElementById("page-wrapper");
  var y = document.getElementById("busqueda-img");
  var focus = document.getElementById("edit-search-block-form--2");

  /*
   if ( y.style.transform == "scaleY(0)") */
  if (y.style.display === "none") {
    x.classList.toggle("changeb");
    focus.blur();
  } else {
    x.classList.toggle("changeb");
    focus.focus();
  }
};

/* INICIO SESION DROPDOWN */
var bloqueLogin = document.getElementById("block-system-user-menu");
var login = document.createElement("div");
login.id = "login";
login.classList = "login";
login.onclick = function () {
  var x = document.getElementsByClassName("section")[0];

  x.classList.toggle("show");
};

var imgLogin = document.createElement("img");
imgLogin.src = "/sites/default/files/login0.png";
imgLogin.classList = "login";
login.appendChild(imgLogin);
document.getElementsByClassName("section")[0].appendChild(login);


/* PARA QUE SE QUEDE AL BAJAR LA PANTALLA*/
window.onscroll = function () {
  scrollFuction();
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function scrollFuction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/* HOME BLOCKS */

var blockButton = document.createElement("div");
blockButton.classList = "block-button-home";
document.getElementById("main").appendChild(blockButton);

var what = document.getElementsByClassName("block-button-home")[0];
var to = document.getElementById("main");
to.insertBefore(what, to.firstChild);

var blockButton1 = document.createElement("button");
blockButton1.id = "block-button-id-1";
document.getElementsByClassName("block-button-home")[0].appendChild(blockButton1);
var blockButton2 = document.createElement("button");
blockButton2.id = "block-button-id-2";
document.getElementsByClassName("block-button-home")[0].appendChild(blockButton2);
var blockButton3 = document.createElement("button");
blockButton3.id = "block-button-id-3";
document.getElementsByClassName("block-button-home")[0].appendChild(blockButton3);

var block1 = document.getElementById("main-wrapper");

blockButton1.onclick = function () {
  block1.classList.toggle("open1");
  block1.classList.remove("open2");
  block1.classList.remove("open3");
};

blockButton2.onclick = function () {
  block1.classList.toggle("open2");
  block1.classList.remove("open1");
  block1.classList.remove("open3");
};
blockButton3.onclick = function () {
  block1.classList.toggle("open3");
  block1.classList.remove("open1");
  block1.classList.remove("open2");
};

var mainMenu = document.getElementById("main-menu").cloneNode(true);
mainMenu.id = "mainmenu";

var secMenu = document
  .getElementById("block-menu-menu-men-secundario")
  .cloneNode(true);
secMenu.id = "sec-menu";

var logo = document.getElementById("logo").cloneNode(true);

var sideNav = document.createElement("div");
sideNav.id = "sidebar";
sideNav.classList = "navigation";
document
  .getElementById("main")
  .insertBefore(sideNav, document.getElementById("main").firstChild);

sideNav.insertBefore(mainMenu, sideNav.firstChild);
sideNav.appendChild(document.createElement("hr"));
sideNav.appendChild(secMenu);
sideNav.appendChild(document.createElement("hr"));

if (document.URL.indexOf("https://guao.org/biblioteca") >= 0) {
  var sidebarfirst = document.getElementById("sidebar-first").cloneNode(true);
  sidebarfirst.id = "sidebarfirst";

  sideNav.appendChild(sidebarfirst);
  var biblio_title = document.createElement("h2");
  biblio_title.id = "title_biblioteca";
  biblio_title.innerHTML = "Biblioteca";
  var biblio = document.getElementById("block-views-exp-library-page-1");
  biblio.insertBefore(biblio_title, biblio.firstChild);
}

if (document.URL.indexOf("https://guao.org/buenas_practicas") >= 0) {
  var sidebarfirst = document.getElementById("sidebar-first").cloneNode(true);
  sidebarfirst.id = "sidebarfirst";

  sideNav.appendChild(sidebarfirst);
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

  sideNav.appendChild(sidebarfirst);
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
  document.URL.indexOf("https://guao.org/docentes/quinto_ano/") >= 0 ||
  document.URL.indexOf("https://guao.org/efemerides") >= 0
) {
  var sidebarfirst = document.getElementById("sidebar-first").cloneNode(true);
  sidebarfirst.id = "sidebarfirst";

  sideNav.appendChild(sidebarfirst);
}

sideNav.insertBefore(logo, sideNav.firstChild);

if (
  document.URL.indexOf("https://guao.org/biblioteca") >= 0 ||
  document.URL.indexOf("https://guao.org/buenas_practicas") >= 0 ||
  document.URL.indexOf("https://guao.org/portafolio-docente") >= 0

) {

const exist = document.querySelectorAll('[id="sidebarfirst"]');
console.log(exist.length);

  if (exist.length != 0) {
  const x = document.getElementById("main");
  const y = document.getElementById("header");
  const z = document.getElementById("page-wrapper");

    z.classList.toggle("change");
    x.classList.toggle("change");
    y.classList.toggle("change");
  	document.getElementById("sidebarfirst").scrollIntoView({block: "start", behavior: "smooth"});
  	
  }

}




const rbs = document.querySelectorAll('input[name="field_categor_as_tid"] , input[name="field_buenas_pr_cticas_tid"] , input[name="field_portafolio_docente_tid"]');

            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.id;

					const tbs = document.querySelectorAll('[for='+ CSS.escape(selectedValue) +']')[0];
					
					console.log(tbs.textContent);
				
					var copy = document.createTextNode(tbs.textContent.replace("-", ""));
					
					var subtitle = document.createElement("div");
					subtitle.id = "subtitle"
					subtitle.appendChild(copy);
					
					console.log(subtitle.textContent);
					
					if (tbs.textContent !== "- Cualquiera -  ") {
					document.querySelectorAll('[class="title"],[id="titulo"]')[0].appendChild(subtitle);
					}

                    break;
                }
            }


