# JavaScript Window Object Snippets

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

