## Trapping Errors with JavaScript

## Check TypeOf to see if Variable Exists Before Use
```javascript
if(typeof <VarName> == "undefined"){
  <EventProcess>
}
```

## Define an Oject if not avaialable
```javascript
if (!window.<ObjectName>) {
   window.<ObjectName> = {};   // assign as an empty object if not available
}
```

## Process the Errors
```javascript
ProcErr = function(e){
  var c=console;
  if(c && c.log && c.error){
    c.log('Error running batched script.');
    c.error(e);
  }
}
try {
}
catch(e){
  ProcErr(e)
};
```

