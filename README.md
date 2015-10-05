# jQuery.removeData
Extend jQuery [removeData()](https://api.jquery.com/removeData/) to also optionally remove the corresponding data-attribute on the element. Also extends to allow data attribute to be passed with or without ```data-```.

## How to Use
Call the ```removeData()``` method on any element with a data attribute.

**HTML**
```html
<div data-foo="selector" data-bar="value">content</div>
```

**Syntax Example - Remove just data cache (original behaviour)**
```javascript
$('div[data-foo=selector]').removeData('data-bar');
$('div[data-foo=selector]').removeData('bar');
```

**Syntax Example - Removes data cache and attribute**
```javascript
$('div[data-foo=selector]').removeData('data-bar', true);
$('div[data-foo=selector]').removeData('bar', true);
```
