$( document ).ready(function() {

// Déclaration d'une variable pour situer le Cégep
var stfe = [48.64979, -72.45859];

// Déclaration de la carte
var map = L.map('map').setView(stfe, 10);

// Déclaration du calque de base
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Ajout du marqueur
var marker = L.marker(stfe).addTo(map);

// Ajout d'une infobulle 
marker.bindPopup("<h3>St-Félicien, Quebec.</h3>");

// Gestion du slider
	const prevBtn = document.querySelector('.prev');
	const nextBtn = document.querySelector('.next');

	const slides = document.querySelectorAll('.banner li');
	let currentSlide = 0;
	
	prevBtn.addEventListener('click', function() {
		currentSlide--
		if (currentSlide < 0) {
			currentSlide = slides.length -1;
		}

		showSlide(currentSlide);
	});
	
	nextBtn.addEventListener('click', function() {
		currentSlide++
		if (currentSlide > slides.length -1) {
			currentSlide = 0;
		}

		showSlide(currentSlide);
	});

	function showSlide(slide) {
		slides.forEach((slide) => {
		  slide.classList.remove('active');
		});
	  
		slides[slide].classList.add('active');
	  }
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});
