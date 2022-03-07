# Text Modification

## Common CSS to Modify Text
| Action | CSS |  
| --- | --- |  
| Abbreviation | `abbr {` <BR> `  border-bottom:1px dotted #7a869a;` <BR> `  cursor:help` <BR> `}` |  
| Code | `.code{` <BR> `  font-family:monospace;` <BR> `  outline:0;` <BR> `}` |  
| Emphasis | `.empahsis {` <BR> `  font-style:italic` <BR> `}` |  
| Hidden | `.hidden{` <BR> `  visibility:hidden` <BR> `}` |  
| Overline | `.overline {` <BR> `  text-decoration:overline` <BR> `}` |  
| Quotes | `q { ` <BR> `  color:#7a869a ` <BR> `} ` <BR> `q:before { ` <BR> `  content:open-quote ` <BR> `} ` <BR> `q:after { ` <BR> `  content:close-quote ` <BR> `}` |  
| Strikethrough | `.strikethrough {` <BR> `  text-decoration:line-through` <BR> `}` |  
| Strong | `.strong{` <BR> `  font-weight:700` <BR> `}` | 
| Underline | `.underline {` <BR> `  text-decoration:underline` <BR> `}` |  
| Visible | `.visible{` <BR> `  visibility:visible` <BR> `}` |  

## Font Family Selection
```css
.cursive{  
  font-family:cursive;  
}  
.monospace{  
  font-family:monospace;  
}  
.sans-serif{  
  font-family:sans-serif;  
}  
.serif{  
  font-family:serif;  
}  
```

## Modify Text
| Action | HTML | CSS |  
| --- | --- | --- |  
| Pre | `.pre{` <BR> `  word-wrap:break-word;` <BR> `  word-break:normal;` <BR> `}` |  
| Small | `<span class="smalltext"></span>` | `.smalltext {` <BR> `  font-size=0.5;` <BR> `}` |  
| Small Caps | `<span class="smallcap"></span>` | `.smallcap{` <BR> `  font-size=0.5;` <BR> `  text-transform="uppercase";` <BR> `}` |  

