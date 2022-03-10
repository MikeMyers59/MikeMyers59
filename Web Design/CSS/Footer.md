# Footer

## Footer Menu

**Note** - the @Media has display issues that need to be resolved.

```html
<div id="footer" role="contentinfo" style="margin-left: 285px;">
  <section class="footer-body">
    <ul id="footer-list">
      <li class="noprint">Powered by <a href="#" class="hover-footer-link" rel="nofollow">The Confluence</a></li>
      <li class="print-only">Printed by The Confluence</li>
      <li class="noprint"><a href="#" class="hover-footer-link" rel="nofollow">Report Bugs</a></li>
      <li class="noprint"><a href="#" class="hover-footer-link" rel="nofollow">News</a></li>
      <li class="noprint"><a href="#" target="_blank">Home&amp;Support</a></li>
    </ul>
  </section>
</div>
```

```css
:root {
  --body-background: #f4f5f7; 
  --body-text: #172b4d;
  --lesser-body-text: #5e6c8;
}
body{
  background: var(--body-background);
  color: var(--body-text);
} 
#footer{
  background: 0;
  box-sizing: border-box;
  clear: both;
  color:var(--lesser-body-text);
  float: left;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
}
#footer .footer-body{
  background-image: none;
  font-size: 12px;
  line-height: 1.66666667;
  margin: 20px 0;
  min-height: 44px;
  padding: 0 10px 21px;
  text-align: center;
}
#footer .footer-body a {
  color: var(--lesser-body-text);
}
#footer .footer-body>p, 
#footer .footer-body>ul {
  margin:10px 0 0;
}
#footer .footer-body>p:first-child,
#footer .footer-body>ul:first-child {
  margin:0
}
#footer .footer-body>ul{
  display: block;
  font-size: 0;
  list-style: none;
  padding: 0;
}
#footer .footer-body>ul>li{
  Display: inline-block;  /* makes the list horizontal */
  font-size: 12px;
  line-height: 1.66666667;
  padding: 0;
  white-space: nowrap;
}
#footer .footer-body>ul>li+li{
  margin-left:10px  /* Adds spacing between the list items. */
}
/* Set the List Separator, Clear last. */
#footer .footer-body>ul>li:after {
  content:"🚀";
  margin-left:10px;
  speak:none
}
#footer .footer-body>ul>li:last-child:after{
  display:none
}

#footer-list {
  border-top: 0;
  background: 0;
}
#footer-list li.print-only{
  display:list-item;
}
#footer-list li.noprint{
  display:none
}

@media print {
  .noprint, .no-print * { display: none }
  .print-only, .print-only * { display: inherit }
}
@media screen only {
  .noprint, .no-print * { display: inherit }
  .print-only, .print-only * { display: none }
}
```

