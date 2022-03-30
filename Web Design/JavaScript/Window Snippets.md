# JavaScript Window Object Snippets

## Properties
```javascript
window.location.href
```

```javascript
// Add an Event Listener or Attach an Event
if (window.addEventListener) {
  window.addEventListener(<EventName>, function() {
    <ProcessEvent>
  });
else {
  window.attachEvent(<EventName>, function() {
    <ProcessEvent>
  });
} // end If window.add/attach event

// Scrolling a Window
window.scrollTo(<Xpos>, <YPos>);

// Set an Event Timer
<TimerVar> = setInterval(function() {
  <TimedProcess>
}, <mSeconds>);
```

## Close a Window
```javascript
function closeMe(){
  myWin = window.self;
  myWin.opener = window.self;
  myWin.close();
}
```

