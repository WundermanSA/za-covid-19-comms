
/**
 * Wunderman Thompson South Africa Namespace
 * @returns {Object} - Props and Methods
 */
const WTSA = (() => {

    let scope;
    let settings;

    /**
     * Initializes the app
     * @param {object} config - settings to customize the behaviour
     * @returns void
     */
    function init(config) {

        settings = config;
        scope = document.querySelector(settings.element);

        convid19Test();

    }

    function convid19Test() {

        const positive = document.getElementById('covid19');

        if(!positive) {
            assemble();
        }

    }

    /**
     * Creates the markup to be injected
     * @returns void
     */
    function assemble() {

        var message = `
            <div id="covid19"
                class="wtsa-convid-19">

                <h1 class="wtsa-convid-19__title">
                    ${settings.title}
                </h1>

                <p class="wtsa-convid-19__message">

                    ${settings.message}

                    <a class="wtsa-convid-19__link"
                        href="www.sacoronavirus.co.za"
                        target="_bank">
                        sa corona virus
                    </a>

                </p>

            </div>`;

        infect(message);

    }

    /**
     * Injects the element into the destination specified. Either adds or replaces
     * @param {HTMLElement} destination 
     */
    function infect(destination) {

        settings.takeOver ? scope.innerHTML = destination : scope.html += destination;

    }

    return {
        covid19: init
    }

})();

WTSA.covid19({
    element: '.covid-19',
    takeOver: true,
    title: 'Covid 19 Title',
    message: 'Covid 19 Message'
});
