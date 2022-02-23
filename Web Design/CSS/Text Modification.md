# Text Modification

## Common CSS to Modify Text
| Action | CSS |  
| --- | --- |  
| Code | `.code{` <BR> `  font-family:monospace;` <BR> `  outline:0;` <BR> `}` |  
| Emphasis | `.empahsis {` <BR> `  font-style:italic` <BR> `}` |  
| Hidden | `.hidden{` <BR> `  visibility:hidden` <BR> `}` |  
| Overline | `.overline {` <BR> `  text-decoration:overline` <BR> `}` |  
| Strikethrough | `.strikethrough {` <BR> `  text-decoration:line-through` <BR> `}` |  
| Strong | `.strong{` <BR> `  font-weight:700` <BR> `}` | 
| Underline | `.underline {` <BR> `  text-decoration:underline` <BR> `}` |  
| Visible | `.visible{` <BR> `  visibility:visible` <BR> `}` |  

## Font Family Selection
```css
.monospace{  
  font-family:monospace;  
}
.cursive{  
  font-family:cursive;  
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

