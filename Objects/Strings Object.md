# String Objects

## String Properties
| Property | Description |  
| --- | --- |  
| length | number of characters assigned to string | 

## String Methods
| Methods | Description |  
| --- | --- |  
| escape() | Encodes a string using URL encoding |  
| indexOf() | A method of the string object that returns the index of the next occurrence of a substring in a string |  
| split() | Separates a string into compnents by delimiter into an array |
| substring() | Returns a portion of the string based on being passed the indexes of the first and last character as arguments |  
| unescape() | Decodes a string encoded using URL encoding |  

## Compare String
```javascript
  function isEqual(str1, str2, ignoreCase) {
    return ignoreCase ? str1.toLowerCase() == str2.toLowerCase() : str1 == str2;
  }
```

## Template Strings (ES6)
Template String replacement elements are indicated by the Dollar sign and curly braces with a normal string that is contained in apostrophe (AKA backtick) delimiters.
```javascript
  ${expression}
```
For example:
```javascript
  var js = "JavaScript";
  var des = `Template strings can now be used in ${js} with lot of additional features.`;
```
Outputs:
```console
  Template strings can now be used in Java Script with lot of additional features.
```
These Template Strings can include multiple lines and hve no inlcuded template elements.
```javascript
  var str = `This is my template string...
  and is working across lines`;
```

#### Using XML as a Template delimiter:
```javascript
  var xml = <XML>
      Here 
      is 
      some 
      multiline 
      text!
  </XML>
```

#### Add a Format prototype function to String
```javascript
  // Add a Format prototype function to String
  // First, checks if it isn't implemented yet.
  if (!String.prototype.format) {
    String.prototype.format = function() {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
        ;
      });
    };
  }
```
**Example call**
```javascript
  "{0} is dead, but {1} is alive! {0} {2}".format("ASP", "ASP.NET")
```
Outputs: 
```console
  ASP is dead, but ASP.NET is alive! ASP {2}
```
Note the {2} element wasn't provided in the call, so it defaultrs as a plain string value.

