# Index of JS

This folder contains JavaScript snippets and examples.


### JavaScript Enclosure in HTML
```html
  <SCRIPT type="text/JavaScript">
  </SCRIPT>
```

Resources:
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

## Keywords
| Keyword | Description |  
| --- | --- |  
| /* ... */|JavaScript multiline comments start with /* and end with */. |  
| //|Start of a single-line comment. Comment starts with // and ends at the end of the line. |  
| else|Executes a command or command block if the condition of an associated if statement is false |  
| function|Declares a function |  
| new|Creates a new instance of an object |  
| this|Refers to the current object |  
| if|Executes a command or command block if a condition is true |  
| var|Declares a variable |  

#### It It OKAY to Delete?
```javascript
function okayToDelete() {
  return confirm("Are you sure you wish to delete?");
}
```

#### Find a Photo
```javascript
function findPhoto() {
  if(document.images)
    for(i=0;i<document.images.length;i++)
document.images[i].onmousedown = stopCopying;
}
```

  
