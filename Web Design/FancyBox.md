# FancyBox

[Fancy Box V4](https://fancyapps.com/docs/ui/fancybox/) 
- [CDN1 - UMD](https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js)
- [CDN2 - Full](https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css)

### Common Calls
```html
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>
<script type="module">
  import { Fancybox } from "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.esm.js";
</script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css">
```

**NOTE**: You can make Fancybox global - `window.Fancybox = Fancybox;` - and it will be available anywhere on the page, it will also be easier to debug.

Old Version Example
```html
<div id="fancybox-tmp"></div>
<div id="fancybox-loading"></div>
<div id="fancybox-overlay"></div>
<div id="fancybox-wrap" style="" class="fancybox-ie">
  <div id="fancybox-outer">
    <div class="fancybox-bg" id="fancybox-bg-n"></div>
    <div class="fancybox-bg" id="fancybox-bg-ne"></div>
    <div class="fancybox-bg" id="fancybox-bg-e"></div>
    <div class="fancybox-bg" id="fancybox-bg-se"></div>
    <div class="fancybox-bg" id="fancybox-bg-s"></div>  
    <div class="fancybox-bg" id="fancybox-bg-sw"></div>
    <div class="fancybox-bg" id="fancybox-bg-w"></div>
    <div class="fancybox-bg" id="fancybox-bg-nw"></div>
    <div id="fancybox-content"></div>
    <a id="fancybox-close"></a>
  </div>
  <div id="fancybox-title"></div>
  <a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span>Fancy1</a>
  <a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span>Fancy2</a>
</div>
```

