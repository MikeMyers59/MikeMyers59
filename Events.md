# Events

## Events
| Event|Description |   
| --- | --- |
| abort|Occurs when the user cancels loading of an image |   
| blur|Occurs when input focus is removed from a form element (when the user clicks outside a field) or focus is removed from a window |   
| click|Occurs when the user clicks on a link or form element |   
| change|Occurs when the value of a form field is changed by the user |   
| error|Occurs when an error happens during loading of a document or image |   
| focus|Occurs when input focus is given to a form element or a window |   
| load|Occurs when a page is loaded into Navigator |   
| mouseout|Occurs when the user moves the pointer off of a link or clickable area of an image map |   
| mouseover|Occurs when the user moves the pointer over a hypertext link |   
| reset|Occurs when the user clears a form using the Reset button |   
| select|Occurs when the user selects a form element's field |   
| submit|Occurs when a form is submitted (i.e., when the user clicks on a submit button) |   
| unload|Occurs when the user leaves a page |   

## Envent Handlers

| Handler | Description | JS |
| --- | --- | :---: |
| onAbort|Specifies JavaScript code to execute when the user cancels the loading of an image|Y |   
| onBlur|Event handler for a blur event (password, selection list, text, text area)|Y |   
| onChange|Event handler for when the value of a field changes (password, selection list, text, text area)|Y |  
| onClick|Event handler for a click event (button, checkbox, radio button, reset, submit)|Y |  
| onError|Specifies JavaScript code to execute when the loading of a document or image generates an error|Y |   
| onFocus|Event handler for a focus event (password, selection list, text, text area)|Y |   
| onLoad|Specifies JavaScript code to execute when a page finishes loading|Y |   
| onMouseOut|Specifies JavaScript code to execute when the user moves the mouse off a link or clickable area of an imagemap|Y |   
| onMouseOver|Specifies JavaScript code to execute when the user moves the mouse over a link or clickable area of an imagemap|Y |   
| onSelect|Event handler for when the user selects text in a field (password, text, text area)|Y |   
| onSubmit|Event handler for the submission of an HTML form|Y |   
| onUnload|Specifies JavaScript code to execute when the user opens a new URL|Y |   

## Objects & Controls use Events
|Object (Control)|Event Handlers Available |   
| --- | --- |   
| Selection list|onBlur, onChange, onFocus |   
| Text element|onBlur, onChange, onFocus, onSelect |   
| Textarea element|onBlur, onChange, onFocus, onSelect |   
| Button element|onClick |   
| Checkbox|onClick |   
| Radio button|onClick |   
| Hypertext link|onClick, onMouseOver, onMouseOut |   
| Clickable Imagemap area|onMouseOver, onMouseOut |   
| Reset button|onClick |   
| Submit button|onClick |   
| Document|onLoad, onUnload, onError |   
| Window|onLoad, onUnload, onBlur, onFocus |   
| Framesets|onBlur, onFocus |   
| Form|onSubmit, onReset |   
| Image|onLoad, onError, onAbort |   

## Event Properties & Methods
cancelBubble 
keyCode
returnValue 
srcElement 
srcElement.tagName

## Event Programming Examples

#### Cancel the Back Button
Requires:

- getEnv()
- getKeyCode

```javascript
function cancelBackButton(sender, evt) {
  var event = evt = getEvt(sender, evt);
  if (getKeyCode(evt) != 8) return true;
  if ((event.srcElement != null) && ((event.srcElement.tagName == "INPUT") || (event.srcElement.tagName == "TEXTAREA"))) return true;
  try { event.cancelBubble = true; } catch (e) { }
  try { event.returnValue = false; } catch (e) { }
  return false;
}
```

#### Capture Key Down in a Document
```javascript
document.onkeydown = new Function("event", "return cancelBackButton( this, event );");
```

#### Get Event
```javascript
function getEvt( sender, evt ) {
  if( ( typeof evt != "undefined" ) && ( evt != null ) ) try {
      evt.srcElement = sender;
     }
     catch( e ) { };  // Do nothing
  if( ( typeof window[ "event" ] != "undefined" ) && ( window.event != null ) ) evt = window.event;
  return evt; }
```

#### Get Key Code
```javascript
function getKeyCode( evt ) {
  if( typeof evt == "undefined" ) {
    try{
      return window.event.keyCode;
    }
    catch( e ) {
      return null;
    }
  }
  try {
    return ( typeof evt.keyCode != "undefined" ) ? ( evt.keyCode ) : ( String.fromCharCode( evt.which ) ); }
  catch( e ) {
    return null;
  }
}
```
