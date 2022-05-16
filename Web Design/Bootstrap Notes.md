# Bootstrap Notes

- [on GitHub](https://github.com/twbs/bootstrap)  
- BS 3.4
  - [Getting Started](https://getbootstrap.com/docs/3.4/getting-started/) 
  - [Grid](https://getbootstrap.com/docs/3.4/css/#grid)  
  - [Dropdown Menus](https://getbootstrap.com/docs/3.4/javascript/#dropdowns)
- BS 4.6
  - [Introduction](https://getbootstrap.com/docs/4.6/getting-started/introduction/) 
- BS 5.1
  - [Introduction](https://getbootstrap.com/docs/5.1/getting-started/introduction/) 

Using navs for tab panels requires JavaScript tabs plugin
For tabs with tabbable areas, you must use the [tabs JavaScript plugin](https://getbootstrap.com/docs/3.4/javascript/#tabs). The markup will also require additional role and ARIA attributes – see the plugin's [example markup](https://getbootstrap.com/docs/3.4/javascript/#tabs-usage) for further details.

#### Bootstrap Color Schem for Buttons, Containers, Labels & Links
![BootStrap Colors](BootstrapColors.png)
**Note**: Primary color is dark blue. Default is grey.

## Buttons

### Badged
```html
<button class="btn btn-primary" type="button">
  Messages <span class="badge">4</span>
</button>
```

### Drop Down Menu
```html
<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Action <span class="caret"></span>
</button>
[DropMenuList]
```

### Drop Up Menu
```html
<button type="button" class="btn btn-default">Dropup</button>
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
     <span class="caret"></span>
     <span class="sr-only">Toggle Dropdown</span>
</button>
[DropMenuList]
```

### Group Horizontal
Can be nested.

```html
<div class="btn-group" role="group" aria-label="...">
  <button type="button" class="btn btn-default">Left</button>
  <button type="button" class="btn btn-default">Middle</button>
  <button type="button" class="btn btn-default">Right</button>
</div>
```
**Option Classes**:
Sizing:
•	`btn-group-lg`
•	`btn-group-sm`
•	`btn-group-xs`

Action: 
•	`dropup`

Justified:
•	`btn-group-justified`

### Group Vertical
Can be nested.

```html
<div class="btn-group-vertical" role="group" aria-label="...">
  <button type="button" class="btn btn-default">Top</button>
  <button type="button" class="btn btn-default">Middle</button>
  <button type="button" class="btn btn-default">Bottom</button>
</div>
```

**Option Classes**:
Sizing:
•	`btn-group-lg`
•	`btn-group-sm`
•	`btn-group-xs`

### Inline

```html
<p>
  <a href="#" class="btn btn-primary" role="button">Button1</a>
  <a href="#" class="btn btn-default" role="button">Button2</a>
</p>
```

**Option Classes**:
Color:
•	`btn-primary`
•	`btn-default`
•	`btn-information`
•	`btn-warning`

## Plain
```html
<button type="button" class="btn btn-default btn-lg">
  <span class="[ICONClassName]" aria-hidden="true"></span> [BTNName]
</button>
```

**Option Classes**:
Colors:
•	`btn-danger`
•	`btn-default`
•	`btn-info`
•	`btn-primary`
•	`btn-success`
•	`btn-warning`
Sizing:
•	`btn-lg`
•	`btn-sm`
•	`btn-xs`

### Split 
First is label (not active) and second is caret (active).

```html
<button type="button" class="btn btn-danger">Action</button>
<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <span class="caret"></span>
  <span class="sr-only">Toggle Dropdown</span>
</button>
```

## Containers
Use containers to split the layout into sections where you put your DOM in a box.
```html
<div id="[ContainerName]" class="container">
  [YourHTML]
</div>  <!-- End of [ContainerName] -->
```

### Panels
```html
<div class="panel panel-default">
  <div class="panel-heading">Panel heading</div>
  <div class="panel-body">Panel Body</div>
  <div class="panel-footer">Panel footer</div>
</div>
```
**NOTE**: Text is same color, but darker.

**Option Classes**:
Colors:
•	`panel-danger`
•	`panel-info`
•	`panel-primary`
•	`panel-success`
•	`panel-warning`

### Row-Column
Rows are containers for columns. A row is split into 12 sections and each section can be addressed using appropriate column tags to set the size of each column. Offsets can also be used to separate columns and count as columns for the total number of columns. The totla of the columns and offsets can not excede 12.

A 2 column equally split example with a Small breakpoint:
```html
<div class="row">
  <div class="col-sm-6">
  </div>
  <div class="col-sm-6">
  </div>
</div>
```
A 4 column equally split example with a Medium breakpoint that also breaks for smal into a 2 column double stacked presentation:
```html
<div class="row">
  <div class="col-xs-6 col-md-3">
  </div>
  <div class="col-xs-6 col-md-3">
  </div>
  <div class="col-xs-6 col-md-3">
  </div>
  <div class="col-xs-6 col-md-3">
  </div>
</div>
```

### Well
A well controls padding and rounded corners.
```html
<div class="well">...</div>
```

**Option Classes**:
Sizes:
•	`well-sm`
•	`well-lg`

## Header 

### Jumbotron
You can create special headers with subdued subheaders with jumbotron.
```html
<div class="jumbotron">
  <div class="container">
    ...
  </div>
</div>
```

## Labels
```html
<h3>Example heading <span class="label label-default">New</span></h3>
```

**Option Classes**:
Colors:
•	`label-danger`
•	`label-info`
•	`label-primary`
•	`label-success`
•	`label-warning`

## Links (AKA: Anchors)
```html
<a href="#" class="list-group-item">Link</a>
```

### Alerts
```html
```
<div class="alert [Color]" role="alert">
  <a href="#" class="alert-link">...</a>
</div>

**Option Classes**:
Colors:
•	`alert-info`
•	`alert-warning`
•	`alert-danger`
•	`alert-success`

### Disabled Link
```html
<a href="#" class="list-group-item disabled">Link</a>
```

