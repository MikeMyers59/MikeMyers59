# jQuery

## Properties
```javascript
$(<Selector>).length
```

## Script Snippets
```javascript
// Add, Change, or Remove an Attribute
$(<Selector>).addAttribute(<NewAttribute>);
$(<Selector>).removeAttribute(<OldAttribute>).addAttribute(<NewAttribute>);
$(<Selector>).removeAttribute(<OldAttribute>);

// Add, Change, or Remove Class 
$(<Selector>).addClass(<NewClass>);
$(<Selector>).removeClass(<OldClass>).addClass(<NewClass>);
$(<Selector>).removeClass(<OldClass>);

// Add and Element witin an Element
$('body').append(<HTMLSting>);

// Check an Element for a Class
$(<Selector>).hasClass(<Class>)

// Execute Process on Timer
setTimeout(function() {
  <TimedProcess>
}, 100);

// Execute a Process when Clicking an Element
$(<Selector>).click(function(e) {
  <ClickProcess>
});

// Execute Process when Element Changes
$(<Selector>).change(function() {
  <ChangeProcess>
});

// Hide or Show an Element or set of Elements
$(<Selector>).hide();
$(<Selector>).show();

// Process every item in a list
$(<ListSelector>).each(function() {
  <ProcessList>
  }
});

// Trigger an Event for Processing
$(window).trigger(<EventName>);
```

