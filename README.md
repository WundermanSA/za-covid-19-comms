# COVID-19 .co.za communication

On the 26th March 2020, the South African government posted a [gazette](http://www.gpwonline.co.za/Gazettes/Gazettes/43164_26-3_Telecommunications.pdf), stating that all Internet sites operating with a South African top level domain are required to have a "landing page" with a visible link to https://sacoronavirus.co.za/

`5.1.4 Internet sites operating within .zaDNA top level domain name must have a landing page with a visible link to www.sacoronavirus.co.za.`

Unfortunately, the information provided isn't too specific around implementation details. 

This script provides a quick and simple way for South African website owners to take quick action without worrying about implementation details - Something visible, but not too intrusive. 


## Table of contents

- [Quick start](#quick-start)
- [Known Issues](#known-issues)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [References](#references)
- [License](#license)

## Quick start

- Add `<script src="https://za-covid-19-comms.s3-eu-west-1.amazonaws.com/release/covid19.min.js"></script>` in the `<head>` of your HTML
- Add `<div class='covid-19'></div>` where ever you want the message to be displayed.
- Add `<script type="text/javascript">WTSA.covid19();</script>` before the closing `</body>` of your HTML

## Known issues

Please send us any issues so that we can fix them

## Documentation

Initialise the script using all defaults.

```javascript
    WTSA.covid19();
```
Initialise the script overriding defaults.
```javascript
    WTSA.covid19({
        element: '.covid-19', //Element to inject into. default: '.covid-19'
        takeOver: true, // Append or replace (take over) inner html. default: true.
        useDefaultCss: false, //Use default css styles. default: true.
        messageTitle: 'IMPORTANT NOTICE!!', //Title to display. default: IMPORTANT NOTICE.
        messageBody: 'Stay up to date with the latest and online resources on COVID-19', //Message to display. default: 'Stay up to date with the latest and online resources on COVID-19.'
        anchorTitle: 'Learn more', //Anchor title. default: 'Learn more'
        parentStyle: 'border-style:solid;border-width:1px;bordercolor:black;', //Parent style to override. default: null
        titleStyle: 'font-weight:bold;', //Title style to override. default: null
        messageStyle: '', //Message style to override. default: null
        anchorStyle: '' //Anchor style to override. default: null
    });
```

## Contributing

Any pull requests or suggestions are welcome :)

## Versioning

za-covid-19-comms is maintained under [the Semantic Versioning guidelines](https://semver.org/).

## Creators

[Jared Bouwer](https://github.com/jaredbouwer)

[Mfundo Sithole](https://github.com/mfundo)

[Cameron Oxley](https://github.com/cameronoxley)

[Christian Mouton](https://github.com/moutonc)

[Alu Raswiswi](https://github.com/Razmatez)

## References

Official Government Gazette
http://www.gpwonline.co.za/Gazettes/Gazettes/43164_26-3_Telecommunications.pdf

https://sacoronavirus.co.za/

## License

Code released under the [MIT License](https://github.com/WundermanSA/za-covid-19-comms/blob/master/LICENSE)
