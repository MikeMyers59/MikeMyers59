# Columns

## A Simple Example
These are the classes
- **column-container** – use as an outer container	
    ```html
    <DIV class="container">   </DIV>
    ```
- **column-of-two** – use to have two equally spaced columns in the area	
    ```html
    <DIV class="column-of-two">   </DIV>
    <DIV class="column-of-two">   </DIV>
    ```
- **column-of-three** – use to have three equally spaced columns in the area	
    ```html
    <DIV class="column-of-three">  </DIV>
    <DIV class="column-of-three">  </DIV>
    <DIV class="column-of-three">  </DIV>
    ```
- **column-of-four** – use to have four equally spaced columns in the area
    ```html
    <DIV class="column-of-four">   </DIV>
    <DIV class="column-of-four">   </DIV>
    <DIV class="column-of-four">   </DIV>
    <DIV class="column-of-four">   </DIV>
    ```
**Note**: All columns must be placed within a *column-container*.  The *column-container* allows the columns to scale properly themselves without being affected by other content on a page.

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

The Result:  
![Column of Two Demo](ColumnofTwoDemo.PNG)
**Note**: I used wide blue border for showing the actual columns. 

