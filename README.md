# Leaflet.Range

A simple HTML5 range control for Leaflet maps.

See the [example](//consbio.github.io/Leaflet.Range).

*Tested with Leaflet 1.1.0*


## Install

```
npm install leaflet-range
```


## Usage

Include the CSS:

```
<link rel="stylesheet" href="L.Control.Range.css" />
```


Include the JavaScript:

```
<script src="L.Control.Range-min.js"></script>
```


The control can be oriented vertically or horizontally. It will fire ```input``` and ```change``` events as the user 
interacts with the slider.


Example usage:

```javascript

var slider = L.control.range({
    position: 'topright',
    min: 0,
    max: 100,
    value: 50,
    step: 1,
    orient: 'vertical',
    iconClass: 'leaflet-range-icon',
    icon: true
});

slider.on('input change', function(e) {
    console.log(e.value); // Do something with the slider value here
});

map.addControl(slider);
```


## Credits:
Developed and maintained with support from the [U.S. Forest Service](http://www.fs.fed.us/) and the 
[USDA Northwest Climate Hub](http://www.climatehubs.oce.usda.gov/northwest).
