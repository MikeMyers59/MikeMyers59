# Hold Area

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

## Variables & Constants

```javascript
var newLineChar = String.fromCharCode(10);
var char34 = String.fromCharCode(34);
```