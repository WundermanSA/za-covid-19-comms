
/**
 * Wunderman Thompson South Africa Namespace
 * @returns {Object} - Props and Methods
 */
const WTSA = (() => {

    let scope;
    let settings;

    let messageTitle;
    let messageBody;
    let anchorTitle;
    let takeOver;
    let useDefaultCss;
    let element;

    /**
     * Initializes the app
     * @param {object} config - settings to customize the behaviour
     * @returns void
     */
    function init(config) {
        
        settings = config || {};

        element = settings.element || '.covid-19';     
        takeOver = settings.takeOver || true;
        useDefaultCss = settings.useDefaultCss || true;
        messageTitle = settings.messageTitle || 'IMPORTANT NOTICE.';
        messageBody = settings.messageBody || 'Stay up to date with the latest and online resources on COVID-19.';
        anchorTitle = settings.anchorTitle || 'Learn more';
        
        scope = document.querySelector(element);

        covid19Test();

    }

    function covid19Test() {

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

        var messageHtml = `
            <div id="covid19"
                class="wtsa-covid-19" style="${settings.parentStyle}">

                <p class="wtsa-covid-19__title" style="${settings.titleStyle}">
                    ${messageTitle}
                </p>

                <p class="wtsa-covid-19__message" style="${settings.messageStyle}">

                    ${messageBody}

                    <a class="wtsa-covid-19__link"
                        href="https://www.sacoronavirus.co.za"
                        target="_blank" style="${settings.anchorStyle}">
                        ${anchorTitle}
                    </a>

                </p>

            </div>`;

        var css = `<style type='text/css'>
        .wtsa-covid-19{

        }
        .wtsa-covid-19__title{
            float:left;
            padding-right:10px;
        };
        
        </style>`;

        if(useDefaultCss) messageHtml += css;

        infect(messageHtml);

    }

    /**
     * Injects the element into the destination specified. Either adds or replaces
     * @param {HTMLElement} destination 
     */
    function infect(destination) {

        takeOver ? scope.innerHTML = destination : scope.html += destination;

    }

    return {
        covid19: init
    }

})();
