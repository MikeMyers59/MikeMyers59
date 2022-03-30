# Handling the Document Object Model (DOM)

## Change a DOM Element’s Style
```javascript
  <ObjectName>.style = "<StyleKeyValueList>";
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
  
  
