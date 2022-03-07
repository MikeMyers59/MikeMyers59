# Body Section Footer

```css
#footer {
  clear:both;
  float:left;
  width:100%;
}
#footer .footer-body {
  color:#7a869a;
  font-size:12px;
  line-height:1.66666667;
  margin:20px 0;
  margin-left:auto;
  margin-right:auto;
  min-height:44px;
  padding:0 10px 21px 10px;
  text-align:center;
  width:980px;
}
#footer-logo{
  margin-top:20px;
}
```

```html
<footer id="footer" role="contentinfo">
  <section class="footer-body">
    <ul id="footer-list">
      <li>Copyright © 2009- </li>
    </ul>
    <div id="footer-logo"></div>
  </section>
</footer>
```

Get the full Year:
```javascript
document.write(new Date().getUTCFullYear());
```

