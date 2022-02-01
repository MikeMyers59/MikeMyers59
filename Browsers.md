# Browsers

### Popular Browsers and DevTools  

#### Check Browser & Redirect 
```javascript
function noMobile() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     window.location.replace("no-mobile.html");
  }
}
function checkForSilk() {  // For Kindle & FireOS
if (/\bSilk\b/.test(navigator.userAgent)) {
     window.location.replace("no-mobile.html");
  }
}
```
The Call:
```html
<body onload="noMobile(); checkForSilk();">
```

# Chrome (Google)  

### Chrome Extensions

# CrEdge (Microsoft)  

# FireFox (Mozilla)  

