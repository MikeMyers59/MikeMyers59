# Window Object

## Window Properties & Methods
defaultView 
dialogArguments
event
frameElement
navigator
ownerDocument
parentWindow
top

## Window Code Examples

#### Chaeck if Window is Modal
```javascript
function checkModal() {
  var w = window.frameElement;
  if ((!w) || (w == null)) return false;
  w = w.ownerDocument;
  if ((!w) || (w == null)) return false;
  w = (typeof w.parentWindow == "undefined") ? w.defaultView : w.parentWindow;
  if ((!w) || (w == null)) return false;
  w = w.dialogArguments;
  if ((!w) || (w == null)) return false;
  return true;
}
```

## Set My Scrolling
```javascript
function setMyScrolling() {
  var o = window.top.document.getElementById(<IDName1>);
  var h = o.offsetHeight;
  var d = document.getElementById(<IDName2>);
  d.style.height = "" + h + "px";
  d.style.overflow = "auto";
}
setMyScrolling();
window.top.document.getElementById( <IDName1> ).onresize = setMyScrolling;
```

