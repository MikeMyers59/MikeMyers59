# jQuery

[jQuery](http://jquery.org/)  
- [jQuery API](http://api.jquery.com/)  
- [jQueryUI API](http://api.jqueryui.com/)  
- [MIT License](http://jquery.org/license)  

```html
<script type="text/javascript" src="jquery.js"></script>
<link type="text/css" href="jquery-ui.css" rel="Stylesheet">
```

Alternates:
```html
<SCRIPT src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous" type="text/javascript" ></SCRIPT>
<SCRIPT src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" type="text/javascript" ></SCRIPT>
```

$('html').removeClass('no-js').addClass('js');

### jQuery Document Loaded Enclosure
Use this enclosure for any actions that need to occur after the DOM is loaded.
```javascript
$(document).ready(function() {
  <JSCommands>
});
```

### jQuery-Migrate

```html
<script type="text/javascript" src="jquery-migrate.js"></script>
```

## [jQuery-UI](http://jqueryui.com/)

**JS Includes**: core.js, widget.js, mouse.js, position.js, draggable.js, droppable.js, resizable.js, selectable.js, sortable.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, menu.js, progressbar.js, selectmenu.js, slider.js, spinner.js, tabs.js, tooltip.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js  
**CSS Includes**: jquery.ui.core.css, jquery.ui.resizable.css, jquery.ui.selectable.css, jquery.ui.accordion.css, jquery.ui.autocomplete.css, jquery.ui.button.css, jquery.ui.datepicker.css, jquery.ui.dialog.css, jquery.ui.menu.css, jquery.ui.progressbar.css, jquery.ui.slider.css, jquery.ui.spinner.css, jquery.ui.tabs.css, jquery.ui.tooltip.css, jquery.ui.theme.css  

```html
<script type="text/javascript" src="jquery-ui.js"></script>
```
#### jQuery UI Sortable

## Examples

### Check if jQuery is loaded, load if not
```javascript
if(typeof jQuery === 'undefined') {
  var script = document.createElement( 'script' );
  script.type = 'text/javascript';
  script.src = 'js/jquery.min.js';
  jQuery('head').append(script);
}
```

### Check jQuery loaded before using
```javascript
if(jQuery) {
}
else {
  alert('jQuery is not loaded on this page.  "<ScriptName>.js" requires jQuery to function.');
}
```

``javascript
<SCRIPT src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></SCRIPT>
<SCRIPT src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></SCRIPT>

/* check if jQuery is loaded, and load if not */
if(typeof jQuery === 'undefined') {
  var script = document.createElement( 'script' );
  script.type = 'text/javascript';
  script.src = '/jquery/jquery_latest/jquery.min.js';
  jQuery('head').append(script);
}
```

## jQuery UI (uses a MIT License)
Contains the following JS modules:
  - accordion.js
  - autocomplete.js
  - button.js
  - core.js
  - datepicker.js
  - dialog.js
  - draggable.js
  - droppable.js
  - effect.js
  - effect-blind.js
  - effect-bounce.js
  - effect-clip.js
  - effect-drop.js
  - effect-explode.js
  - effect-fade.js
  - effect-fold.js
  - effect-highlight.js
  - effect-puff.js
  - effect-pulsate.js
  - effect-scale.js
  - effect-shake.js
  - effect-size.js
  - effect-slide.js
  - effect-transfer.js
  - menu.js
  - mouse.js
  - position.js
  - progressbar.js
  - resizable.js
  - selectable.js
  - selectmenu.js
  - slider.js
  - sortable.js
  - spinner.js
  - tabs.js
  - tooltip.js
  - widget.js

Contains the following CSS modules:
  -  jquery.ui.accordion.css
  -  jquery.ui.autocomplete.css
  -  jquery.ui.button.css
  -  jquery.ui.core.css
  -  jquery.ui.datepicker.css
  -  jquery.ui.dialog.css
  -  jquery.ui.menu.css
  -  jquery.ui.progressbar.css
  -  jquery.ui.resizable.css
  -  jquery.ui.selectable.css
  -  jquery.ui.slider.css
  -  jquery.ui.spinner.css
  -  jquery.ui.tabs.css
  -  jquery.ui.theme.css
  -  jquery.ui.tooltip.css

## Is using jQuery the Best Option?

Consider the following HTML: `<div id="text">Let's change this content</div>`

| jQuery Method | Plain Vanilla JS Method |  
| --- | --- |  
| `$('#text').html('The content has changed').css({` <BR> `  backgroundColor: 'red',` <BR> `  color: 'yellow'` <BR> `});` | `var text = document.getElementById('text');` <BR> `text.innerHTML = 'The content has changed';` <BR> `text.style.backgroundColor = 'red';` <BR> `text.style.color = 'yellow';` |  

