
function makeWave(n){
makeWaveText = "Mike's Fun with HTML";
display = "";
for (i = 0; i < makeWaveText.length; i++)
{
size = 68*Math.abs(Math.sin(
(i+n)*3.14/makeWaveText.length))
display +=
"<font style='font-size: "+ size +
"pt' color='purple'>"
+makeWaveText.substring(i,i+1)+ "</font>";
}
textDiv.innerHTML = display;
if (n > makeWaveText.length) {n=0}
else {n++}
setTimeout("makeWave(" + n + ")", 300);
}


function timeFormat() {
if (document.myTime.showFormat[0].checked) {
return true;
}
return false;
}
function showHours(nowHour) {
if (timeFormat() || (nowHour > 0 && nowHour < 13)) {
return (nowHour);
}
if (nowHour == 0) {
return (12);
}
return (nowHour-12);
}
function displayZero(timeVal) {
if (timeVal > 9) {
return "" + timeVal;
}
return "0" + timeVal;
}
function AmPm() {
if (timeFormat()) {
return ("");
}
if (now.getHours() < 12) {
return (" AM");
}
return (" PM");
}
function displayTime() {
now = new Date
document.myTime.showTime.value =
showHours(now.getHours()) + ":" +
displayZero(now.getMinutes()) + ":" +
displayZero(now.getSeconds()) + AmPm()
setTimeout("displayTime()",1000)
}

