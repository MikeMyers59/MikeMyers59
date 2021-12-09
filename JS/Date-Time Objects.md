# Handling Dates & Time

### Formating Dates

#### For YYYYMMDD Prototype Function (Date)
```javascript
  Date.prototype.yyyymmdd = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
    return [this.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
           ].join('');
  };
  // Invoking the new Date Extension
  var ds = (new Date()).yyyymmdd();
```
#### As a Normal Function
```javascript
  function yyyymmdd(dateIn) {
    var yyyy = dateIn.getFullYear();
    var mm = dateIn.getMonth() + 1; // getMonth() is zero-based
    var dd = dateIn.getDate();
    return String(10000 * yyyy + 100 * mm + dd); // Leading zeros for mm and dd
  }
  var ds = yyyymmdd(new Date());
```
#### Alternates to the Normal Function
```javascript
  // For YYYYMMDD
  var rightNow = new Date();
  var ds = rightNow.toISOString().slice(0,10).replace(/-/g,"");
  // Alternately
  var ds = (new Date()).toISOString().slice(0,10).replace(/-/g,"")

  // For YYYY-MM-DD
  var ds = (new Date()).toISOString().substring(0, 10);
  var ds = (new Date()).toISOString().slice(0, 10);
  var ds = (new Date()).toLocaleString('en-us', {year: 'numeric', month: '2-digit', day: '2-digit'}).replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');

  // For YYYYMMDDHHmmSSsss
  var ds = (new Date()).toISOString().replace(/[^0-9]/g, "");
```

