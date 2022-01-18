# CSS

## Attributes

| Attribute | Options | Example |  
| --- | --- | --- |  
| align-items | center;  |   |  
| animation | animateleft 0.4s;  |   |  
| box-sizing| { border-box | content-box | inherit} ; |   |  
| clear| both; |   |  
| code[class=""], |   |  
| code|not{ [class]}   |   |  
| cursor | pointer;  |   |  
| display | {  block \| flex \| inline-block \| none \| table \| table-cell }   |   |  
| flex| 1 1 50%;  |   |  
| flex-direction | {  column | row } ;  |   |  
| float | {  none | left | right } ;  |   |  
| font-family | { Arial \| Cambria \| LibreFranklin-Bold \| gdCorp \| gdUniv} ;  |   |  
| font-size | 11pt;  |   |  
| font-weight | bold | 800;  |   |  
| justify-content| space-between;  |   |  
| list-style-type| {  circle \| decimal \| lower-alpha \| lower-roman \| none \| square \| upper-alpha \| upper-roman } ; |   |  
| position | { absolute \| relative} ;  |   |  
| text-decoration| { none \| underline} ; |   |  
| vertical-align| {  bottom \| middle \| sub \| super \| top } ; |   |  
| white-space| normal;  |   |  
| width| auto;  |   |  

## Pseudo Selectors
| Attribute | Options |  
| --- | --- |  
| nth-child({ even \| odd})] | Select every other row based on index number |   

## Responsive Selectors
```css
/*  responsive set to typical tablet portrait size  */
@media only screen and (max-width: 768px) {
}

/*     responsive set to typical phone portrait size */
@media only screen and (max-width: 400px) {
}
```

## Simple CSS Additions

```css
. centered {
  text-align: center;
}

.vertical-middle {
  vertical-align: middle;
}

.vertical-top {
  vertical-align: top;
}

.vertical-bottom {
  vertical-align: bottom;
}

.vertical-subscript {
  vertical-align: sub;
}

.vertical-superscript {
  vertical-align: super;
}```

## Toast Messages
```css
/*Begin Toast Messages*/

@keyframes showHideMsgAnimation {
  0% {
    opacity: 0;
    top: -2em;
  }
  25% {
    opacity: 1;
    top: 1em;
  }
  85% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes showMsgAnimation {
  0% {
    opacity: 0;
    top: -2em;
  }
  100% {
    opacity: 1;
    top: 1em;
  }
}
.msg {
  background-color: deepskyblue;
  border-radius: 1em;
  color: white;
  font-size: 200%;
  left: 50%;
  padding: .5em 1em;
  position: fixed;
  text-align: center;
  top: 1em;
  transform: translateX(-50%);
}
.errorMsg {
  background-color: darkred;
}
.successMsg {
  background-color: green;
}
.warningMsg {
  background-color: goldenrod;
}
.showHideMsg {
  animation-duration: 5s;
  animation-name: showHideMsgAnimation;
  opacity: 0;
}
.showMsg {
  animation-duration: 1.25s;
  animation-name: showMsgAnimation;
  cursor: pointer;
}
.showMsg:hover {
  background-color: firebrick;
}
.showMsg::after {
  content: ' (Click to dismiss)';
  font-size: 75%;
}```

