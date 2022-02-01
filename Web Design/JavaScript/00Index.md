# JavaScript

[ECMA-262, Edition 5, 15.4.4.14](http://es5.github.io/#x15.4.4.14)

## Frameworks & Packages
[Bootstrap-tour](http://bootstraptour.com/)
[jQuery Foundation, Inc.](https://jquery.org)
  - [jQuery-UI](http://jqueryui.com) 
    - [Theme Management & Creation](http://jqueryui.com/themeroller/)
  - [jQuery License](https://jquery.org/license)
  - jQuery Migrate
[Matt Kruse](<matt@mattkruse.com>)
  - calendar_popup.js
[PrismJS](http://prismjs.com/)  
[SPServices](http://spservices.codeplex.com)

### jQuery UI (uses a MIT License)
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

# Code Structures

## Event Driven Functions
```javascript
(function(w,d){
}) ( window, document);
```

## Self Executing Functions

#### OnLoad/Unload Events
```javascript
window.onload = function () {
};
window.onunload = function () {
};
```

# Examples

#### Check if Cahracter is Printable
```javascript
function isPrintable(keycode) {
  const valid = (keycode > 47 && keycode < 58) || // number keys
    keycode === 32 || // spacebar & return key(s) (if you want to allow carriage returns)
    (keycode > 64 && keycode < 91) || // letter keys
    (keycode > 95 && keycode < 112) || // numpad keys
    (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
    (keycode > 218 && keycode < 223); // [\]' (in order)
  return valid;
}
```

#### Escapes html tags in prep for pretty print
Requires jQuery
```javascript
$(document).ready( function () {
	$( 'code' ).each(function() {
	var test = $(this).html();
	var res = test.replace(/</g,"&lt;");
	$(this).html(res);
	})
});

$(document).ready( function() { 
$('button').each(function() {
	$(this).button();
	})
});

$(document).ready( function() { 
var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
    "<h1>On this page:</h1>" +
    "<ul>";

var newLine, el, title, link;

$(".content h1").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += newLine;

});

ToC +=
   "</ul>" +
  "</nav>";
  
$("#toc-container").html(ToC);
});
```

#### Display URL (href) as Modal
```javascript
function displayModal(url) {
// show the modal dialog from a href
    var options = SP.UI.$create_DialogOptions();
    options.url = url;
    SP.UI.ModalDialog.showModalDialog(options);
}
```

