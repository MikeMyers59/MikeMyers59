# Index of JS

This folder contains JavaScript snippets and examples.


### JavaScript Enclosure in HTML
```html
  <SCRIPT type="text/JavaScript">
  </SCRIPT>
```

Resorces:
- [Simple-Excel.js](https://github.com/faisalman/simple-excel-js) - Client-side script to easily parse / convert / write any Microsoft Excel XLSX / XML / CSV / TSV / HTML / JSON / etc formats

# Hold Area

## Common Constants & Variables

#### Common Objects
| Data | Usage |
|  ---- | ----|
| document | ```d = window.document``` <BR> ```doc = window.document``` |
| location | ```l = window.location ```<BR> ```loc = window.location``` |
| navigator | ```n = window.navigator``` <BR> ```nav = window.navigator``` |
| window | ```w = window``` <BR> ```win = window``` |
| jQuery | ```window.jQuery = jQuery``` <BR> ```window.$ = jQuery``` |


#### Regular Expresions
```javascript
  var Regex = {
      COMMA       : /(,)(?=(?:[^"]|"[^"]*")*$)/g,
      FILENAME    : /.*\./g,
      IMAGEFILE   : /\.(bmp|jpe?g|png|gif|webP)$/i,
      LINEBREAK   : /\r\n?|\n/g,
      QUOTATION   : /(^")(.*)("$)/g,
      TWO_QUOTES  : /""/g
  };
```
Example of Usage:
```javascript
  function getFiletype (filename) {
    return filename.replace(Regex.FILENAME, '');
  },
```

#### Special Characters
```javascript
  var Char = {
      COMMA           : ',',
      CRLF            : '\r\n'
      NEWLINE         : '\n',
      RETURN          : '\r',
      SEMICOLON       : ';',
      TAB             : '\t',
  };
```
