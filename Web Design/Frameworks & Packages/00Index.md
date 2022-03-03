# Frameworks & Packages  

[Bootstrap](http://getbootstrap.com)
  - [Bootstrap on GitHub](https://github.com/twbs/bootstrap/)  
  - [Bootstrap-tour](http://bootstraptour.com/) - Ulrich Sossou  
[Dash.js](https://github.com/Dash-Industry-Forum/dash.js/) 
[DataTables](https://datatables.net/)
  Included libraries: JSZip 2.5.0, pdfmake 0.1.36, DataTables 1.10.24, Buttons 1.7.0, HTML5 export 1.7.0, Print view 1.7.0, FixedHeader 3.1.8
**JSON**
  - [JSONML: JSON Markup Language](http://jsonml.org/) 
[JSZip](<http://stuartk.com/jszip>) - A Javascript class for generating and reading zip files
  - [JSZip on GitHub](https://raw.github.com/Stuk/jszip/)
[LESS - Leaner CSS](http://lesscss.org) 
[LightSlider](https://github.com/sachinchoolur/lightslider)
[Magnific Popup](https://dimsemenov.com/plugins/magnific-popup/)
[Matt Kruse](<matt@mattkruse.com>)
  - calendar_popup.js
[Normalize](https://git.io/normalize)
[pdfmake](http://pdfmake.org)
[prismJS](https://prismjs.com/)
[ShadowBox](http://shadowbox-js.com/)  
  - [ShadowBox on GitHub](http://github.com/mjijackson/shadowbox/)  
[Sizzle.js](http://sizzlejs.com/)  
[SlickJS](https://github.com/kenwheeler/slick) - carousel 
[SPServices](http://spservices.codeplex.com)
[StackTraceJS](https://www.stacktracejs.com/)
[swfobject](http://code.google.com/p/swfobject/)  
tooltipster v4.2.6 - needs prettification.
[Vertex42](https://www.vertex42.com/) - MS Office Templates
[Video.js](https://github.com/videojs/video.js)   
  - [Video.js on GitHub](https://github.com/videojs/videojs-contrib-dash/)  

## Angular
  - [Angular SSO example](https://github.com/jlguenego/angular-sso-example) 

## ClipBoardJS
[ClipboardJS](https://github.com/zenorocha/clipboard.js) 

```html
<script src="clipboard.min.js"></script>
```

## [FancyBox](http://fancybox.net) 
A jQuery Plugin for simple and fancy lightbox alternative; requires jQuery v1.3+, and jQuery Mousewheel
```html
<script type="text/javascript" src="./fancybox/jquery.fancybox-1.3.4.pack.js"></script>
<link rel="stylesheet" type="text/css" href="./fancybox/jquery.fancybox-1.3.4.css" media="screen" />
```

## Font Awesome
[Font Awesome icons](http://fortawesome.github.io/Font-Awesome/icons/)
```html
<link type="text/css" href="font-awesome.css" rel="Stylesheet">
```

## jQuery
[jQuery Foundation, Inc.](https://jquery.org)
  - [jQuery-UI](http://jqueryui.com) 
    - [Theme Management & Creation](http://jqueryui.com/themeroller/)
  - [jQuery License](https://jquery.org/license)
  - jQuery Migrate

```html
https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/ui-lightness/jquery-ui.min.css
https://www.jsdelivr.com/projects/jquery.slick
```

CDN Calls
```html
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.0/jquery.min.js" integrity="sha512-K7Zj7PGsHk2fpY3Jwvbuo9nKc541MofFrrLaUUO9zqghnJxbZ3Zn35W/ZeXvbT2RtSujxGbw8PgkqpoZXXbGhw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

jQuery Alternate Load
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.0.min.js"><\/script>')</script>
```


```javascript
// Load the jquery UI if necessary (1.10.3)
if ( jquery_ui != "undefined" ) {
  var html_doc = document.getElementsByTagName('head')[0];
  var ca = document.createElement('link'); ca.type = 'text/css';
  ca.rel = 'stylesheet';
  ca.href = 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/ui-lightness/jquery-ui.min.css';
  html_doc.appendChild(ca);
  var ja = document.createElement('script');
  ja.type = 'text/javascript';
  ja.async = true;
  ja.src = 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js';
  var js = document.getElementsByTagName('script')[0];
  js.parentNode.insertBefore(ja, js);
};
```

### [jQuery Mousewheel](http://brandon.aaron.sh) 
Adds cross-browser mouse wheel support with delta normalization
- [jQuery Mousewheel on GitHub](https://github.com/jquery/jquery-mousewheel) 
```html
<script type="text/javascript" src="./fancybox/jquery.mousewheel-3.0.4.pack.js"></script> 
```

## JSON
[JsonML: JSON Markup Language](http://jsonml.org/) 

## [Magnific Popup by Dmitry Semenov](http://bit.ly/magnific-popup) 

## Markdown-IT
  - [Gitter](https://gitter.im/markdown-it/markdown-it) 
  - [jsDeliver CDN](http://www.jsdelivr.com/#!markdown-it "jsDeliver CDN") 
  - [cdnjs.com CDN](https://cdnjs.com/libraries/markdown-it "cdnjs.com") 
  - [API documentation](https://markdown-it.github.io/markdown-it/)  

## Materialize
[Materialize](https://github.com/jasonmayes/mdl-component-design-pattern) 

## MathJax
[MathJax](http://www.mathjax.org/) 
  - [MathJax on GitHub](https://github.com/mathjax/MathJax/) 

## Mustache
```html
<script type="text/javascript" src="mustache.min.js"></script>
```

## Node.js
- Git Bash: `curl --negotiate -u : http://localhost:3000 -b cookie.txt`
- Powershell: `Invoke-WebRequest -uri http://localhost:3000 -UseDefaultCredentials`

## [Normalize](http://necolas.github.io/normalize.css/)

## Popper
```html
<SCRIPT src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></SCRIPT>
```

## Prettify
```html
<link rel="stylesheet" href="../prettify.css" />
<script src="../prettify.js"></script>
```

## Prism.js & Prism.css

```html
<script type="text/javascript" src="prism.js"></script>
<link href="prism.css" type="text/css" rel="stylesheet">
```

## React.js
[React](https://reactjs.org/)
  - [React DevTools](https://reactjs.org/link/react-devtools) 
  - [React DevTool FAQs](https://reactjs.org/link/react-devtools-faq) 
  - [React SSO example](https://github.com/jlguenego/react-sso-example) 
```html
<SCRIPT crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></SCRIPT>
<SCRIPT crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></SCRIPT>
```

## SlickJS
```html
https://cdnjs.com/libraries/slick-carousel
```

## Video.js 
[Video.js](https://github.com/videojs/video.js) 
  - [Video.js on GitHub](https://github.com/videojs/videojs-contrib-dash/) 

## VueJS
[Vue]( https://vuejs.org/) 
  - [Vu Devtools](https://github.com/vuejs/vue-devtools) 
  - [Vue SSO example](https://github.com/jlguenego/vue-sso-example) 
Vue in development mode. Make sure to turn on production mode when deploying for production. See more tips at https://vuejs.org/guide/deployment.html 
```html
<SCRIPT src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></SCRIPT>
```

