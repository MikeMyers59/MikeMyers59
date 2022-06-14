# CSS Attributes

align-content: center; 
align-items: { center \| stretch };  
align-self: flex-start; 
animation: { none \| \<KeyFrameID> };   
appearance: none;  
background-clip: padding-box;  
background-position: { 1px 2px \| center -16px };  
background-repeat: no-repeat;  
border: 0 hidden transparent;
border-collapse: { collapse \| separate }  
border-spacing: 0px;  
border-style: dashed;  
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15) inset, 0 1px 2px rgba(0, 0, 0, 0.05);  
box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);  
box-shadow: none;  
box-sizing: { border-box \| content-box  \| initial };    
clip: <ClipFunction>;  
column-count:2;  
column-gap: 2em;  
column-rule: 1px solid #A16D04;  
cursor: { auto \| default \| e-resize \| grabbing \| help \| inherit \| move \| n-resize \| ne-resize \| no-drop \| not-allowed \| nw-resize \| pointer \| s-resize  \| se-resize \| sw-resize \| text \| w-resize };  
display: { list-item \| table-caption \|  table \| table-cell };  
empty-cells: { show };  
filter: alpha(opacity=50);  
flex: { 1 1 20% \| initial };  
flex-basis: calc(50% - 7.5px);  
flex-direction: { column \| column-reverse \| row \| row-reverse \| wrap-reverse };  
flex-flow: row nowrap;  
flex-grow: 1;  
flex-shrink: 1;  
flex-wrap: { wrap | nowrap };  
font-size: medium;
grid-gap: 10px;  
justify-content: { flex-start \| space-between };  
letter-spacing: { normal | <size> }  
justify-items: center;  
line-height: { <size> }  
list-style-image: none;  
list-style-type: { none \| none outside none };
outline: none;  
outline-style: none;  
overflow: { auto \| hidden \| scroll \| visible };  
  overflow-x:  
  overflow-y:  
overflow-wrap: break-word;
page-break-inside: avoid;  
pointer-events: none;  
position: static;  
resize: none;  
table-layout: fixed;  
text-decoration: { line-through \| underline };  
text-decoration-color: white;  
text-indent: -9999px;  
text-overflow: ellipsis;  
text-shadow: none;  
text-transform: { capitalize \| lowercase \| uppercase };  
touch-action: none;
transform: <TransformFunction>;  
transition: { auto \| background-color .1s linear \| opacity .25s ease-in-out \| width 250ms linear \| all 0.25s ease 0s \| border 0.2s linear 0s, box-shadow 0.2s linear 0s}  
transform-origin:0 0;  
transition-delay: 0s;  
transition-duration: inherit;  
transition-property: { height \| opacity \| transform,height };  
transition-timing-function: inherit;  
unicode-bidi: { embed \| isolate };  
user-select: none;  
vertical-align: { baseline \| initial \| pre \| text-bottom \| text-top };  
visibility: hidden;  
white-space: { normal \| nowrap } 
width: unset;
word-break: { break-all \| keep-all };  
word-wrap: break-word;  

## Position
bottom: 0;  
left: 0;  
position: absolute;  
right:0;  
top: 0;  

## What is?
```css
button:disabled,
button[disabled] {
}

aui-toggle:before { content:"\00a0"; }

.link-separator {content:'•';padding:0 5px}

```
