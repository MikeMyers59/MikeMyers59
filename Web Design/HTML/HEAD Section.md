# HTML HEAD Section  

```html
<DESCRIPTION>Alerts warn about vulnerabilities, incidents, and other security issues that pose a significant risk.</DESCRIPTION>
<LANGUAGE>en</LANGUAGE>
<TITLE>Your Page Title</TITLE>
```

## Description
```html
<DESCRIPTION>This web site provides: .</DESCRIPTION>
```

## Language  
```html
<LANGUAGE>en</LANGUAGE>
```

## Links
```html
<LINK rel="canonical" href="https://www.yoursite.com/YourPage.html">
<link rel="shortlink" href="https://www.yoursite.com/YourPage.html">
<link rel="stylesheet" type="text/css" href="css/style.css"> 
```

### Link Fonts with Google API
```html
<LINK href="https://fonts.googleapis.com/css?family=Dosis:200|Merriweather|Montserrat|Roboto" rel="stylesheet">
```

### Link Icons 
For the browser tab - use 16x16
For the taskbar - use 32x32
```html
<LINK rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<LINK rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<LINK rel="icon" href="https://cdn.vertex42.com/Images/Vertex42Icon-192x192.png" sizes="192x192">
<LINK rel="icon" href="https://cdn.vertex42.com/Images/Vertex42Icon-512x512.png" sizes="512x512">```

### Link CSS 
```html
<LINK rel="stylesheet" href="main.css" type="text/css">
```

### Set Icons  
```html
<LINK rel="icon" href="https://cdn.vertex42.com/Images/Vertex42Icon-32x32.png" sizes="32x32">
```

## META Data  
```html
<META name="theme-color" content="#3969ad">
<META http-equiv="cache-control" content="max-age=0">
<META http-equiv="cache-control" content="no-cache">
<META http-equiv="X-UA-Compatible" content="IE=11" />
<META http-equiv="X-UA-Compatible" content="ie=edge">
<META name="Keywords" content="publication" />
<META name="robots" content="noarchive,noindex,nofollow">
<META http-equiv="expires" content="0">
```

### Set Character Set  
```html  
<META http-equiv="content-type" content="text/html; charset=UTF-8">  
<META http-equiv="Content-Type" content="text/html; charset=windows-1252">
<META charset="UTF-8">  
```  

### Set Viewport  
```html
<META name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
```

## Script
There is an order to these scripts!  Be sure to put requiremnts before usage/calls!
```html
<SCRIPT type="text/javascript" src="jquery.js"></SCRIPT>
<SCRIPT type="text/javascript" src="main.js"></SCRIPT>
<SCRIPT type="text/markdown" src="markdown.js"></SCRIPT>
<SCRIPT type="text/javascript" src="js/jquery-migrate.min.js"></SCRIPT>
<SCRIPT type="text/javascript" src="js/jquery_ui_latest/js/jquery-ui.custom.min.js"></SCRIPT>
```

## Span
```css
span.icon {
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR42rVTPQuFIBT1p1t7e2EFDrXnVmNb4Ca4BS5BW9AfOA+F+wjfAwfpwuHcDzn3olcGIAv5An3fo+u6L55x27bE5P+cZdkWqVJH6pDMsWxTSsFjmqbAMZIC4zjivm9c14XjOLDvO4wx2LYNwzCkBZqmwXmecM7BWgutNdZ1xTzP8LWkQFVVWJYFUspwQUII1HUd2NeSApxzeJRlCfKLovBxYPa6xe9KsedHLc7TXryzidQpnurvZNm/8QMbqb4yyqv4rAAAAABJRU5ErkJggg==);
  width:16px;
  height:16px;
  display:inline-block
}
span.icon2 {
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR42q1TMQqAMBDr0/UBroJiBUEf0E51dRMcxUlwFBcHPxA5IUuLONSDcDmupO01VQCiEC+gtYagrusH5FVVCfdz0FfRQVVR5CmoLtzfnWBf/R7WWhhjIFnAmvlToOs6XNeF8zyx7zvWdcU8zxjHEW3bhgK8NydaFAWO48C2bViWBdM0YRgGOOcgPc7t9RWyLEPf92ia5hEuyxJ5nj+Lpae+IkkSpGkKZnLW6u/gDHzX+c6kP4j/nfjmNJ8HiP6NN81gzxU6QYojAAAAAElFTkSuQmCC);
  width:16px;
  height:16px;
  display:inline-block;
}
```

## Style
Embedded Style
```html
style="margin:0;padding:0;"
```

Inline Style
```html
<STYLE>...</STYLE>
```

Linked Style File
```html
<LINK rel="stylesheet" href="css/main.css" type="text/css">
<LINK type="text/css" href="css/jquery-ui.custom.css" rel="Stylesheet" />
<LINK type="text/css" href="css/jquery-ui.gdeb.css" rel="Stylesheet" />
<LINK type="text/css" href="css/homepage.css" rel="Stylesheet" />
```

