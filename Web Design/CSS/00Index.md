# CSS

[tool tips](https://www.w3schools.com/css/css_tooltip.asp)  

#### To Check Out
```css
behavior: url('/homepages/comp_sys_sup/include/css/PIE.htc');
```

#### Training Available
[The Missing Semester of Your CS Education](https://missing.csail.mit.edu/) 
- Data files on [GitHub](https://github.com/missing-semester/missing-semester)
- Lectures on [Hacker Tools](https://hacker-tools.github.io/lectures/)
- Video recordings of the lectures are available [YouTube](https://www.youtube.com/playlist?list=PLyzOVJj3bHQuloKGG59rS43e29ro7I57J)

#### CSS Namespace
| Namespace ID | Source |  
| --- | --- |  
| -moz- | Mozilla |  
| fa- | FontAwesome |  
| ms- | Microsoft |  
| mso- | Microsoft Office | 
| UI- | jQuery-UI |  

## Attributes

| Attribute | Options | Example |  
| --- | --- | --- |  
| align-items | center;  |   |  
| animation | animateleft 0.4s;  |   |  
| animation-delay | `<Time>` |  |   
| animation-duration | `<Time>` |  |   
| animation-iteration-count | `<Integer>` |  |    
| animation-name | '<IDName>' |  |   | background | { <Color> \| [ <ImageFile> <Setting> <Size> <Size> ] } | --- |  
| background-position | <Percent> | --- |  
| background-size | { <Size> ] } | --- |  
| border <Size> <Type> <Color> | none | `border: solid 1px #aaa;` |  
| border-bottom | { <Size> \| none } | --- |  
| border-bottom-left-radius | <Size> | --- |  
| border-bottom-right-radius | <Size> | --- |  
| border-radius | <Size> | --- |  
| border-left | <Size> | --- |  
| border-right | <Size> | --- |  
| border-top | <Size> | --- |  
| box-shadow  <Top> <Right> <Bottom> <Color> <BR> -moz-box-shadow <BR> -webkit-box-shadow | { none }; | --- |  
| box-sizing| { border-box | content-box | inherit} ; |   |  
| clear| { both \| left \| right }; |   |  
| clip| auto \| rect() |   |  
| code[class=""], |   |  
| code|not{ [class] }   |   |  
| color | <Color> | `color: #ddd;` |  
| cursor | { initial \| pointer };  |   |  
| display | {  block \| flex \| inline-block \| none \| table \| table-cell }   |   |  
| flex| 1 1 50%;  |   |  
| flex-direction | {  column | row } ;  |   |  
| float | {  none | left | right } ;  |   |  
| font-family | { Arial \| Arial Narrow \| Cambria \| Helvetica \| LibreFranklin-Bold \| Roboto \| sans-serif \| serif } ;  |   |  
| font-size | <Size>  |   |  
| font-weight | { bold \| bolder \| normal } |  |  
| height | <Size> |  |  
| justify-content| space-between;  |   |  
| left | { <Percentage> } | --- |  
| line-height | <Size> \| `normal \| inherit` | --- |  
| list-style-type| {  circle \| decimal \| lower-alpha \| lower-roman \| none \| square \| upper-alpha \| upper-roman } ; |   |  
| margin <Top> <Right> <Bottom> <Left> <BR> margin <Top-Bottom> <Right-Left> <BR> margin <All>  <BR> margin-bottom <BR> margin-left <BR> margin-right <BR> margin-top | { <Size> \| auto \| none } | --- |  
| max-width | <Size> |  |  
| min-width | <Size> |  |  
| opacity | <Percent> |  |  
| overflow | [ visible \| hidden ] |  |  
| padding <BR> padding-bottom <BR> padding-left <BR> padding-right <BR> padding-top | <Size> | --- |   
| position | { absolute \| fixed \| relative \| static } ;  |   |  
| right | { <Percentage> } | --- |  
| text-align | { center \| left \| right } | --- |  
| text-decoration| { none \| underline }; |   |  
| text-overflow | ellipsis |  |  
| text-shadow <Top> <Right> <Bottom> <Color> | { none }; | `text-shadow: -2px 2px 4px #ccc;` |  
| text-transform | { lowercase \| uppercase } | --- |  
| transform | [ translate(-50%, -50%) /| scale(0.25) ] |  |  
| transform-origin | { bottom | center | top } { center | right | left }  |  |  
| transition-duration <BR> -webkit-transition-duration | <Seconds>s | --- |  
| top | { <Percentage> } | --- |  
| User-Select | { all \| none}; | --- |  
| vertical-align| {  bottom \| middle \| sub \| super \| top } ; |   |  
| white-space| { normal \| nowrap };  |   |  
| width| <Size> \| auto |   |  
| z-index | <Index> |  |  
| zoom |  |  |  
| -webkit-transform | [ translate(-50%, -50%) /| scale(0.25) ] |  |  
| -webkit-transform-origin | { bottom | center | top } { center | right | left }  |  |  

<Color>  { black \| white }  
<Size>   { none \| em \| en \| px \| % }  
<Type>   { solid }  

-mox  Namespace for Mozilla (FireFox)  
-webkit Namespace for Microsoft (CrEdge)  

## Pseudo Selectors
| Attribute | Options |  
| --- | --- |  
| :nth-child({ even \| odd \| <Index> })] | Select every other row based on index number |   
| :root |  |  

#### Set CSS Variables
Setting variables is CSS uses a Key-Value pair:
```css
/* For Root Values */
:root {
  --hue: 215;
  --sat: 39%;
  --lum: 51%;
  --one: 0;
  --two: 60;
  --three: 120;
  --four: 180;
  --five: 240;
  --six: 300;
  --dark: 30;
  --light: 210;
}
/* For individual selector values */
.accent-1 {
  --this-hue: calc(var(--hue) + var(--one));
  background: hsl(var(--this-hue), var(--sat), var(--lum));
  position:relative;
}
```
Call the variable using the `var()` function. as show:  
```css
hsl(var(--hue), var(--sat), var(--lum))
```

## Responsive Selectors
```css
/* Setup just for Printing */
@media print{
}
/*  responsive set to typical tablet portrait size  */
@media only screen and (max-width:951px){
}
@media all and (max-width: 798px){
}
@media only screen and (max-width: 768px) {
}
@media all and (max-width: 641px){
}
@media all and (max-width: 540px){
}
@media all and (max-width: 480px){
}
/*     responsive set to typical phone portrait size */
@media only screen and (max-width: 400px) {
}
@media all and (max-width: 400px){
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

