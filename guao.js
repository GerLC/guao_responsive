var meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width");
var head = document.getElementsByTagName("head")[0];
head.append(meta);


var link = "https://use.fontawesome.com/releases/v5.15.1/js/all.js";
var element = document.createElement("script");
element.setAttribute("src", link);
element.setAttribute("data-search-pseudo-elements",'');

document.head.appendChild(element); 
					
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
           fade.style.opacity = .95;
        });
 
window.addEventListener('DOMContentLoaded', (event) => {
           fade.style.opacity = 0;
           loader.classList.remove("loader");
           loaderIn.classList.remove("loader-inner");
        });
        
        
/*  INICIO SESION  */
window.addEventListener("click", function (event) {
  if (!event.target.matches(".login")) {
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



/** Boton Expandir Filtro Sidebar-first */

var expandBtn = document.createElement("span");
expandBtn.classList = "btn-expand";

expandBtn.onclick = function () {

  const z = document.getElementById("page-wrapper");

  	  z.classList.toggle('expand-sidebar');
  	  z.classList.remove('change');
      z.classList.remove('icon-open-search');

};

/** Hamburger Button  
  * Opens Menu on click
  * Closes it on click if opened
*/
var divClass = document.createElement("span");
divClass.id = "hamburger-id-btn";
divClass.classList = "hamburger";
divClass.onclick = function () {

  var z = document.getElementById("page-wrapper");

  if (z.style.marginLeft) {
    z.classList.toggle("change");
    z.classList.remove('expand-sidebar');
    z.classList.remove('icon-open-search');

  } else {
    z.classList.toggle("change");
    z.classList.remove('expand-sidebar');
    z.classList.remove('icon-open-search');
  }
};

var to = document.getElementsByClassName("section")[0];
to.insertBefore(divClass, to.firstChild);


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
  var x = document.getElementById("page-wrapper").classList.toggle("icon-open-search");
};

busquedaImg.onclick = function () {
  var x = document.getElementById("page-wrapper");
  var y = document.getElementById("busqueda-img");
  var focus = document.getElementById("edit-search-block-form--2");

  if (y.style.display === "none") {
    x.classList.toggle("icon-open-search");
    x.classList.remove('change');
    x.classList.remove('expand-sidebar');
    focus.blur();
  } else {
    x.classList.toggle("icon-open-search");
    x.classList.remove('change');
    x.classList.remove('expand-sidebar');
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
login.appendChild(imgLogin);
imgLogin.classList = "login";
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
  block1.classList.toggle("open-1");
  block1.classList.remove("open-2");
  block1.classList.remove("open-3");
};

blockButton2.onclick = function () {
  block1.classList.toggle("open-2");
  block1.classList.remove("open-1");
  block1.classList.remove("open-3");
};
blockButton3.onclick = function () {
  block1.classList.toggle("open-3");
  block1.classList.remove("open-1");
  block1.classList.remove("open-2");
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

  var biblio_title = document.createElement("h2");
  biblio_title.id = "title_biblioteca";
  biblio_title.innerHTML = "Filtro Biblioteca";
  var biblio = document.getElementById("block-views-exp-library-page-1");
  biblio.insertBefore(biblio_title, biblio.firstChild);
}

if (document.URL.indexOf("https://guao.org/buenas_practicas") >= 0) {

  const innovaciones = document.getElementById(
    "block-views-exp-buenas-pr-cticas-page-1"
  );
  const innovaciones_title = document.createElement("h2");
  innovaciones_title.id = "title_innovaciones";
  innovaciones_title.innerHTML = "Innovaciones Educativas";
  innovaciones.insertBefore(innovaciones_title, innovaciones.firstChild);
}

if (document.URL.indexOf("https://guao.org/portafolio-docente") >= 0 || document.URL.indexOf("https://guao.org/portafolio_docente") >= 0  ) {

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

var to = document.getElementsByClassName("section")[0];
to.insertBefore(expandBtn, to.firstChild);


}

sideNav.insertBefore(logo, sideNav.firstChild);

if (
  document.URL.indexOf("https://guao.org/biblioteca") >= 0 ||
  document.URL.indexOf("https://guao.org/buenas_practicas") >= 0 ||
  document.URL.indexOf("https://guao.org/portafolio-docente") >= 0
||
  document.URL.indexOf("https://guao.org/portafolio_docente") >= 0

) {

var to = document.getElementsByClassName("section")[0];
to.insertBefore(expandBtn, to.firstChild);

const exist = document.querySelectorAll('[id="sidebar-first"]');
console.log(exist.length);
const existFilter = document.querySelectorAll('.page-biblioteca, .page-buenas-practicas, .page-portafolio-docente');
console.log(existFilter.length);


  if (exist.length !== 0 && existFilter.length !== 0) {

  const z = document.getElementById("page-wrapper");

    z.classList.toggle("expand-sidebar");

  }
  

}



/** Change backgroundColor 
 * This part changes the backgroundColor of the sidebar-first
 * First, it looks if sidebar-first exist to proceed
 * On the block class it gets the actual backgroundColor
 * 
 * The reason for this it's beacause if i dont put it, the sidebar-first doesnt get all the background in the same color.
 */
 
  if (document.querySelectorAll('[id="sidebar-first"]').length !== 0) {

  const z = document.getElementById("sidebar-first").getElementsByClassName('block')[0];

   let filterColor =  window.getComputedStyle(z).backgroundColor;
   document.getElementById('sidebar-first').style.backgroundColor = filterColor;
   console.log(filterColor);
  }


/** Subtitle on selected value on filter
 * It gets all the input
 * It checks the selectedValue and takes the id
 * Once it has the Id, we get the 'for' element who has the name of the selectedValue
 * Then it creates a textContent and we added it there
 */
 
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


