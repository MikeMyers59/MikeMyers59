# Tipsy, a jQuery Expansion

A plugin for generating Facebook-style tooltips.

**Source**: [Tipsy](http://onehackoranother.com/projects/jquery/tipsy)
            [Tipsy SourceCode on GitHub](https://github.com/jaz303/tipsy)

**Requires**: jQuery

### Features:

- Lightweight and easy to use.
- Displays tooltips based on tag's title or data-title attributes.
- Custom fade-in / fade-out animations.
- Custom positions.
- Tooltips can be triggered by click, hover, focus or manual.
- onShow and onHide callback events support.


### CDN Links:
```html
  <link href="https://cdnjs.cloudflare.com/ajax/libs/jquery.tipsy/1.0.3/jquery.tipsy.css" rel="stylesheet" type="text/css" />
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.6.2.min.js"></script> 
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.tipsy/1.0.3/jquery.tipsy.js"></script>
```
### How to use it:

1. Load the jquery.tipsy.css for basic tooltip styles.
```html
<link href="css/jquery.tipsy.css" rel="stylesheet">
```

2. Load jQuery plugin and the jquery.tipsy.js at the end of the web page.
```html
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="js/jquery.tipsy.js"></script>
```

3. Add the tooltip text into tag's title or data-title attributes.
```html
<a href="#" title="I'm A Tooltip">Hover me</a>
```

4. Call the plugin with customization options.
```javascript
$('a').tipsy({
// arrow width
arrowWidth: 10, //arrow css border-width * 2, default is 5 * 2
// default attributes for tipsy
// data-tipsy-position | data-tipsy-offset | data-tipsy-disabled
attr: 'data-tipsy',
// custom class
cls: null,
// fadeIn, fadeOut animation duration
duration: 150,
// offset from element
offset: 7,
// top-left | top-center | top-right | bottom-left
// bottom-center | bottom-right | left | right
position: 'top-center',
// hover | focus | click | manual
trigger: 'hover',
// events
onShow: null,
onHide: null
})
```

5. You can also pass the options directly in the html using data-tipsy-OPTION attributes as shown below:
```css
    data-title: tooltip text
    data-tipsy-disabled: disable the tooltip
    data-tipsy-position: position option
    data-tipsy-offset: offset option
```

6. Public methods. To use these methods, make sure to set the trigger opiton to manual.
```javascript
$('a').tipsy.("show");
$('a').tipsy("hide");
$('a').trigger("tipsy.show");
$('a').trigger("tipsy.hide");
```

