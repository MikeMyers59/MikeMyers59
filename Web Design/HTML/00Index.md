# HTML

## Code Wrapper for HTML
```html
<q lang="html">A quote in a paragraph</q>
```
```css
q:lang(html) {
  quotes: "<" ">";
}
```

## Forms

### Select Menu
```html
<h3>HTML SELECT dropdown</h3>
<select name="LDeptMenu" id="menu1">
  <option value="" selected="selected">L dept links</option>
  <option value="https://www.cnn.com">CNN</option>
  <option value="https://www.abcnews.com">ABC</option>
  <option value="https://www.cbsnews.com">CBS</option>
  <option value="https://www.foxnews.com">FOX</option>
</select>
```
The required script:
```javascript
var urlmenu = document.getElementById( 'menu1' );
urlmenu.onchange = function() {
  if(this.selectedIndex != 0) {
    window.open( this.options[ this.selectedIndex ].value )
  };
};
```

## Header
```html
<HEADER id="Header" class="header">
  <NAV class="header dropdown2-trigger-group" data-aui-responsive="true">
    <DIV class=" header-inner">
    </DIV>
  </NAV>
</HEADER>
```

```css
.header {
  background-color: #0049B0;
}
.header .header-inner {
  display: none;
}

#Header .header { 
  color: #DEEBFF; 
}

```

## Menu Item Separations
```html
<span>▸</span>
```

## No Script Clause
```html
<noscript>
  <div>Your browser does not have JavaScript enabled. Please turn on JavaScript and try again.
  </div>
</noscript>
```

## Notifications
```html
<p class="greenStatus"> A Green Status Condition </p>
<p class="yellowStatus"> A Yellow Status Condition </p>
<p class="redStatus">A Red Status Condition</p>
```
```css
.greenStatus {
  background-color: #000;
  color: green;
  font-weight: bold;
}
.redStatus {
  background-color: #000;
  color: red;
  font-weight: bold;
}
.yellowStatus {
  background-color: #000;
  color: yellow;
  font-weight: bold;
}
```

## Skip to Main Content
```html
<a class="skippy" href="#content">
  <span class="skippy-text">Skip to main content</span>
</a>
```
Later in document:
```html
<main class="container" id="content">
  <a name="content"></a>
  [Content]
</main>
```
Associated CSS:
```css
.skippy{
  display:block;
  padding:1em;
  color:#fff;
  text-align:center;
  background-color:#563d7c;
  outline:0
}
.skippy:hover{
  color:#fff
  }
.skippy-text{
  padding:.5em;
  outline:1px dotted
}
```

## Table Template
```html
<table style="padding-top: 7px; width:100%; border-collapse: collapse; border-spacing: 0;">
  <tbody>
    <tr>
      <td></td>
    </tr>
  </tbody>
</table>
```
```html
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
    </tr>
  </tbody>
</table>
```

