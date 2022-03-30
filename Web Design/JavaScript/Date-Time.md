# Date & Time in JavaScript

## Constants & Variables
```javascript
var date =  new Date();
var month = date.getMonth();
var day = date.getDay();
const WEEKDAY_NAMES = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
```

## Examples
```javascript
var dateObj1 = new Date();
var startTime1 = dateObj1.getTime();

function calcTime() {
    dateObj2 = new Date();
    endTime = dateObj2.getTime();
    totSec = Math.round((endTime - startTime1)/1000);
    timMin = Math.floor(totSec/60);
    if (timMin.toString().length == 1) timMin='0'+timMin;
    timSec = totSec - (timMin * 60)
    if (timSec.toString().length == 1) timSec='0'+timSec;
    totTime = "00:"+timMin+":"+timSec
    //alert(totTime);
    return totTime;
}
```

