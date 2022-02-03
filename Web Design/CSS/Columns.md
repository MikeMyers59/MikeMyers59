# Columns

## A Simple Example
These are the classes
- **column-container** – use as an outer container	
- **column-of-two** – use to have two columns in the area	
- **column-of-three** – use to have three columns in the area	
- **column-of-four** – use to have four columns in the area

The Stylesheet:
```css
/* Begin Column Classes */
.column-container:after {
  display: block;
  height: 0;
  clear: both;
  content: " ";
}
.column-of-two {
    padding: 0.5%;
  float: left;
  width: 50%;
}
.column-of-three {
    padding: 0.5%;
  float: left;
  width:33%;
}
.column-of-four {
    padding: 0.5%;
  float: left;
  width: 25%;
}
```

The usage:
```html
<div class="column-container">
<!- Header – above the two columns
  <div class="centered section-header">
    Header
  </div>
  <div class="column-of-two centered" style="padding-right: 50px; padding-left: 50px; border:solid 5px blue” >
    This is the left column 
  </div>
  <div class="column-of-two centered" style="padding-right: 50px; padding-left: 50px; border:solid 5px blue">
    This is the right Column
  </div>
</div> <!—End Column Container -->
```
