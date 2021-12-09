# Research What does this do?
```javascript
  [ var | let ] fs = require('./lib/fs.js')
```
### Calls to fs
```javascript
  fs.existsSync(configFile)
  fs.readFileSync(path.resolve(folder.template),'utf8')
  fs.emptydirSync(path.resolve(folder.output.path));
  fs.ensureDirSync(path.resolve(folder.output.path));
  fs.outputJsonSync(configFile, config);
```

### Module Fs.js Example of Overloading
```javascript 
  //Overloaded fs.js

  fs = require('fs-extra');

  // Overwrite existsSync as it's being deprecated
  fs.existsSync = function(path){
    try {
      fs.accessSync(path, fs.F_OK);
      return true;
    } catch (e) {
      return false;
    }
  };

  module.exports = fs;
```
