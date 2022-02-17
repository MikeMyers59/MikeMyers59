# CSS Variables

Custom properties (sometimes referred to as CSS variables or cascading variables) are entities defined by CSS authors that contain specific values to be reused throughout a document. They are set using custom property notation (e.g., --main-color: black;) and are accessed using the var() function (e.g., color: var(--main-color);).  
**Note**: The variable name must begin with two dashes (--) and it is case sensitive!  

Defining the variables:
```css
:root {
  --main-bg-color: brown;
}
```  

Calling the variable:
```css
<Selector> {
  background-color: var(--main-bg-color);
}
```  

**Note**: Using var(--my-var, red); /* Red if --my-var is not defined */ provides fallback values.  

Using the CSS Variables in javascript:  
```javascreipt
// get variable from inline style
element.style.getPropertyValue("--my-var");
// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");
// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

