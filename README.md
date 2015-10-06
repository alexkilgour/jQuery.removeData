# jQuery.removeData
Extend jQuery [removeData()](https://api.jquery.com/removeData/) to also optionally remove the corresponding data-attribute on the element. Also extends to allow data attribute to be passed with or without ```data-```.

**Current Version:** 1.0.0

## Installation
Include [jQuery](http://jquery.com/download) and `jQuery.removeData.js` in your HTML document. Supports jQuery version 1.2.3+
```html
<script src="http://code.jquery.com/jquery-latest.min.js"></script>  
<script src="jQuery.removeData.js"></script>
```

## How to Use
Call the ```removeData()``` method on any element with a data attribute.

**HTML**
```html
<div data-foo="selector" data-bar="value" data-baz="value">content</div>
```

**jQuery**  
remove just data cache (original behaviour)  
```javascript
$('div[data-foo=selector]').removeData('data-bar');  
$('div[data-foo=selector]').removeData('bar');  
$('div[data-foo=selector]').removeData('[data-bar, data-baz]');  
$('div[data-foo=selector]').removeData('[bar, baz]');  
$('div[data-foo=selector]').removeData('data-bar data-baz');  
$('div[data-foo=selector]').removeData('bar baz');
```

**jQuery**  
removes data cache and attribute  
```javascript
$('div[data-foo=selector]').removeData('data-bar', true);  
$('div[data-foo=selector]').removeData('bar', true);  
$('div[data-foo=selector]').removeData('[data-bar, data-baz]', true);  
$('div[data-foo=selector]').removeData('[bar, baz]', true);  
$('div[data-foo=selector]').removeData('data-bar data-baz', true);  
$('div[data-foo=selector]').removeData('bar baz', true);
```

## Running the Unit Tests
Open ```test/index.html``` in a browser

## Feedback
If you discover any issues or have questions regarding usage, please add an issue on GitHub.
