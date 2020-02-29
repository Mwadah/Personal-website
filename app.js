/* 1-toggle menu */


/* a- variables */
var toggleMenu= document.getElementById('toggle-menu');
var menu= document.getElementById('menu');
var firstLine= document.getElementById('first');
var secondLine= document.getElementById('second');
var thirdLine= document.getElementById('third');


/* b-functions */
toggleMenu.addEventListener('click', function() {
	menu.classList.toggle('translate');
	firstLine.classList.toggle('original-position');
	secondLine.classList.toggle('original-position');	
	thirdLine.classList.toggle('original-position');
});




/* 2-relocate page */


/* a-variables */
var loadingOvrlay= document.getElementById('loading-overlay');
var loadingLine= document.getElementById('loading-line');
var home= document.getElementById("home");
var about= document.getElementById("about");
var skills= document.getElementById("skills");
var portfolio= document.getElementById("portfolio");
var contact= document.getElementById("contact");
var pagesArray= [home, about, skills, portfolio, contact];


/* b-functions */
var z= 0;

function preRelocate(goTo) {
	z++;

	if (!(z> 1)) {
		relocate(goTo);
	}
}


function relocate(goTo) {
	menu.classList.toggle('translate');
	firstLine.classList.toggle('original-position');
	secondLine.classList.toggle('original-position');
	thirdLine.classList.toggle('original-position');

	loadingLine.setAttribute('x2', 0);

	setTimeout(function() {
		for (var i= 0; i < pagesArray.length; i++) {
			pagesArray[i].style.transform= "translateY(-2000px)";
		}

		loadingOvrlay.style.transform= "translateY(0px)";
	}, 800);

	var lineFilled= false;

	setTimeout(function() {
		var x= 0;
		var pageLoadingAnimation= setInterval(function() {
			x++;

			if (x<= 250) {
				loadingLine.setAttribute('x2', x);
			}

			else {
				lineFilled= true;
				clearInterval(pageLoadingAnimation);
			}

		}, 8);
	}, 2200);

	var travelToPage= setInterval(function() {
		if (lineFilled) {
			clearInterval(travelToPage);
			setTimeout(function() {
				loadingOvrlay.style.transform= "translateY(2000px)";
				goTo.style.transform= "translateY(0px)";

				return z= 0;
			}, 200)
		}

	}, 1);
}