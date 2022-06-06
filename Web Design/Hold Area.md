# Hold Area

- [DynamicDrive](http://dynamicdrive.com) - samples of DHTML
- [Mike Hall](http://www.brainjar.com)

## Cookies
```javascript
function acceptsCookies() {
  document.cookie = 'Welcome!';
  return (document.cookie === '');
}
```

## RE: Regular Expressions

```javascript
.match( /app:(.*)/i )
.match( /^hcp:/i )
.match( /^http:/i )) // This link is for Internet Explorer, so don't strip away the query string.
.match( /\.hlp/i   )
.match( /\.chm/i   )
.replace(" ","%20")
```

## Strings

### Remove Leading Spaces from Form Element
```javascript
function trimLeadingSpaces(formElement){		
	while (''+formElement.value.charAt(0)==' '){
		formElement.value=formElement.value.substring(1,formElement.value.length);
	}		 
}
```

## URL
```javascript
var pageURL = window.document.location.toString();
var docURL = document.location.href;
```

## Variables & Constants

```javascript
var newLineChar = String.fromCharCode(10);
var char34 = String.fromCharCode(34);
```

## Window
```javascript
function closePage() {
  window.close();
}
```

