# Scripts

## JavaScript

Soma simple JavaScript calls:
```html
<script src="../sorter.js" type="text/javascript"></script>
<script src="../block-navigation.js" type="text/javascript"></script>
```

## MarkDown
```html
<script src="markdown.js" type="text/javascript"></script>
```

# Modules
```javascript
<SCRIPT type="module">
  const { useState } = React;
  import { App } from './app.js';
  ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
</SCRIPT>
```

## Template HTML

A Sample Template used by Mustache:
```html
<script id="applications-template" type="x-tmpl-mustache">
  <div class="column-container">
    <div class="column-of-two">
      <ul>
      {{#applications.column-one}}
        <li><a href="{{link}}">{{name}}</a></li>
        {{#sub}}
          <ul>
            {{#applications}}
              <li><a href="{{link}}">{{name}}</a></li>
            {{/applications}}
          </ul>
        {{/sub}}
      {{/applications.column-one}}
      </ul>
    </div>
    <div class="column-of-two">
      <ul>
      {{#applications.column-two}}
        <li><a href="{{link}}">{{name}}</a></li>
        {{#sub}}
          <ul>
            {{#applications}}
              <li><a href="{{link}}">{{name}}</a></li>
            {{/applications}}
          </ul>
        {{/sub}}
      {{/applications.column-two}}
      </ul>
    </div>
  </div>
</script>
```

## VBScript

