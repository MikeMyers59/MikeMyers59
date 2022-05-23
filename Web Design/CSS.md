# CSS: Cascade Style Sheet  

Does CSS allow aliasing to combine several classes? No use JS to add/remove classes!  

#### Pseudo-Class
|Attribute | Example |
| --- | --- | 
| First Child	| :first-child{ } |
| Last Child	:last-child{ } |

## Align
|Attribute | Example |
| --- | --- | 
| Align Content | `align-content: flex-start;` | 
| Align Items | `align-items:{ center | flex-end };` | 
| Align Self | `align-self: center;` | 
| Text-Align | `text-align: center;` |  
| Vertical Align | `vertical-align: baseline;` |  

## Background
```css
background-color: #fdfdfd;
background-image: radial-gradient(circle, #ddd 1px, rgba(0,0,0,0) 1px); /* dotted background */
background-size: 1rem 1rem;
background-color: #FAE042;
background-color: rgba(250, 224, 66, .2);
background-color:#172b4d;
background-color: #7C5A0B;
background-color: #A77B0E;
```

## Border
Common Templates:
```css
  border-color: inherit;
  border-radius: .5rem;
  border-style: solid;
  border-width: 3px;
```
Short Form:
```css
  border: 0 1px 0 0;
```
Long Form
```css
  border-top: 0;
  border-right: 1px;
  border-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-left: 0;
```

## Box Sizing
```css
box-sizing: border-box;
```

## Content 
```css
content: attr(data-charcode);
content: attr(char);
content: "";
```

## Cursor
```css
cursor: { copy | crosshair | grab | grabbing | move | not-allowed | pointer };
```

## Direction
```css
 [dir=ltr] <Class> {
  left:40%;
  padding-right:24px;
}
[dir=rtl] <Class> {
  padding-left:24px;
  right:40%;
}
```

## Display
```css
display: { block | flex | grid | inline | inline-block | inline-flex };
```

## Flex
|Attribute | Example |
| --- | --- | 
| Flex Basis	| flex-basis: 250px; |
| Flex Direction | flex-direction: { column | row } | 
| Flex Grow	| flex-grow :1; |
| Flex Shrink	| flex-shrink: 0;|
| Flex Wrap	| flex-wrap: wrap; |

## Font
|Attribute | Example |
| --- | --- | 
| font-weight: | bold; |
| font-family:|  monospace; |
| font-size: | 1.2rem; |

## Height & Width
|Attribute | Example |
| --- | --- | 
| Maximum Width	| `max-width:650px;` |   
| Minimum Height	| `min-height:144px;` |   
| Minimum Width	| `min-width:365px;` |    

## Justify
```css
justify-content: { center | flex-end | space-around | space-between | space-evenly };
```

## Page Break
```css
page-break-inside: avoid;
```

## Position

### Viewport Position
|Attribute | Example |
| --- | --- | 
| Bottom	| bottom: 50%; | 
| Left	| left: 50%; | 
| right	| right: 50%; | 
| Top	| top: 10px; | 

## Text Modification
|Attribute | Example |
| --- | --- | 
| Text Decoration  | `text-decoration: { overline | underline };` |
| Text Transform | `text-transform: uppercase;` |

## Text-overflow
```css
text-overflow: ellipsis;
```

## Transform
```css
transform: rotate(90deg) translateX(-3px);
transform: translateY(-2px);
```

## Transition
```css
transition: max-height .25s ease-in-out;
```

## Unicode
```css
unicode-bidi: isolate;
```

## User Select
```css
user-select: none;
user-select: text;
```

