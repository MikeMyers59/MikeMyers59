# JavaScript

[ECMA-262, Edition 5, 15.4.4.14](http://es5.github.io/#x15.4.4.14)

```javascript  
/* eslint-disable */  
"use strict";  
```  

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

