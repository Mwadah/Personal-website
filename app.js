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
	menu.classList.remove('translate');
	firstLine.classList.add('original-position');
	secondLine.classList.add('original-position');
	thirdLine.classList.add('original-position');

	loadingLine.setAttribute('x2', 0);

	setTimeout(function() {
		for (var i= 0; i < pagesArray.length; i++) {
			pagesArray[i].classList.remove('translate');
		}

		loadingOvrlay.classList.add('translate');
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
				goTo.style.position= "fixed";
				loadingOvrlay.classList.remove('translate');
				goTo.classList.add('translate');

				setTimeout(function() {
					goTo.style.position= 'absolute';
				}, 2200);

				return z= 0;
			}, 200)
		}

	}, 1);
}