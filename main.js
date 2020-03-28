
const WTSA = (function () {

	var scope;
	var settings;

	/*
	   config = {
		 element: '',
		 primaryColor: '',
		 secondaryColor: ''
		 takeOver: true
	   }
	   
	 */

	function init(config) {

		settings = config;
		scope = document.querySelector(settings.element);

		assemble();

	}

	function assemble() {

		var message = '<div id="covid19"><h1>Covid 19 Message</h1><p>Visit <a href="www.sacoronavirus.co.za" target="_bank">sa corona virus</a></p></div>';

		inject(message);

	}

	function inject(element) {

		settings.takeOver ? scope.innerHTML = element : scope.html += element;

	}

	return {
		covid19: init
	}

})();

WTSA.covid19({
	element: '.covid-19',
	takeOver: true
});