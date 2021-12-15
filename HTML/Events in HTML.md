# Events in HTML

## On Click

#### Disable Right Click
```javascript
function click(){
  if (event.button==2){
    alert('Stop using right-click menu!');
  }
}
document.onmousedown=click;
<body oncontextmenu="return false;" >
```

## On Load
Place these functions in the HEAD Section; no need to reference the funtion as Browsers look for the onload function when loading.

#### Template for On Load
```html
  <SCRIPT type="text/JavaScript">
  onunload = function(){
     <YourScript Here>
  } 
  </SCRIPT>
``` 

#### Load an HTML file with JavaScript:
```html
  <SCRIPT type="text/JavaScript">
  onload = function(){
    document.location.href = 'FileName.htm'
  }
  </SCRIPT>
```

## On Unload
Place these functions in the HEAD Section; no need to reference the funtion as Browsers look for the onload function when loading.


#### Template for On UnLoad
```html
  <SCRIPT type="text/JavaScript">
  onunload = function(){
     <YourScript Here>
  }   
  </SCRIPT>
``` 

