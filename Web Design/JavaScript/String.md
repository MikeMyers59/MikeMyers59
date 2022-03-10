# Strings

## Test Characters for Printability
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

## Trap HTML Entity Problems
```javascript
var safeHtml = function(unsafeHtml) {
  if (unsafeHtml) {
    return unsafeHtml
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;') 
      .replace(/\//g, '&#x2F;')
      .replace(/\(/g, '&lpar;')
      .replace(/\)/g, '&rpar;');
    }
    return '';
};
```

### Trim with a Regular Expression
```javascript
function TrimString(value) {
    return value.replace(/^\s+|\s+$/g, '')
}
```

