# String Objects

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
