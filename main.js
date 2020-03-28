
/**
 * Wunderman Thompson South Africa Namespace
 * @returns {Object} - Props and Methods
 */
const WTSA = (function () {

	var scope;
	var settings;

    /**
     * Initializes the app
     * @param {object} config - settings to customize the behaviour
     * @returns void
     */
	function init(config) {

		settings = config;
		scope = document.querySelector(settings.element);

		assemble();

	}

    /**
     * Creates the markup to be injected
     * @returns void
     */
	function assemble() {

		var message = '<div id="covid19"><h1>Covid 19 Message</h1><p>Visit <a href="www.sacoronavirus.co.za" target="_bank">sa corona virus</a></p></div>';

		inject(message);

	}

    /**
     * Injects the element into the destination specified. Either adds or replaces
     * @param {HTMLElement} destination 
     */
	function inject(destination) {

		settings.takeOver ? scope.innerHTML = destination : scope.html += destination;

	}

	return {
		covid19: init
	}

})();

WTSA.covid19({
	element: '.covid-19',
	takeOver: true
});

WTSA