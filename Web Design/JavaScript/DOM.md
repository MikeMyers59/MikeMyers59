# Handling the Document Object Model (DOM)

## Change a DOM Element’s Style
```javascript
  <ObjectName>.style = "<StyleKeyValueList>";
```

## Set Height & Width of an Element
```javascript
var scr_w = screen.availWidth;
var scr_h = screen.availHeight;

if (scr_w != window.width || scr_h != window.height) {
  window.resizeTo(scr_w, scr_h);
  window.moveTo(0, 0);
}

function SetElementHeight(element, height) {
    if (element && element.style) {
        element.style.height = height + "px";
    }
}
function SetElementWidth(element, width) {
    if (element && element.style) {
        element.style.width = width + "px";
    }
}
function SetElementX(element, x) {
    if (element && element.style) {
        element.style.left = x + "px";
    }
}
function SetElementY(element, y) {
    if (element && element.style) {
        element.style.top = y + "px";
    }
}
```

## When the DOM has loaded execute Javascript
document.addEventListener("DOMContentLoaded", function(event) {
  <eventProcessing>;
});

## Change Visibility of DOM Elements
```javascript
function switchVis()
{
  if(document.getElementById('oldcal'))
  { 
    var current = getStyle();
    if( current == 'visible' )
    {
      document.getElementById('oldcal').style.visibility = 'hidden';
      document.getElementById('oldcal').style.display = 'none';		  
    }
    else
    {
      document.getElementById('oldcal').style.visibility = 'visible';
      document.getElementById('oldcal').style.display = 'inline';		  
    }
  }
}
```
  
  
