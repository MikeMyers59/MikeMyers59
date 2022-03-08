# @Media (Screen & Print)

```css
@media (min-width: 480px) {
}
@media screen and (min-width: 481px) and (max-width: 767px) {
}
@media screen and (min-width: 768px) and (max-width: 11365px) {
}
@media (min-width: 1366px) {
}

/* Responsive Containers */
/*  
   480px - common cell/mobile phone portrait display
   768px - common tablet portrait display
  1920px - common monitor width display (192x1080)
*/
@media screen and (max-width: 865px) {}
@media screen and (max-width: 600px) {}
@media screen\0 {}
@media only screen and (min-width: 576px) {}
@media only screen and (min-width: 768px) {}
@media only screen and (min-width: 992px) {}
@media only screen and (max-width: 1024px) {}
@media only screen and (min-width: 1200px) {}
@media only screen and (min-width: 1600px) {}
@media (max-width: 400px), (max-height: 550px) {}
@media (max-width: 575px) {}
@media (min-width: 576px) and (max-width: 767px) {}
@media (min-width: 768px) and (max-width: 991px) {}
@media (min-width: 992px) and (max-width: 1199px) {}
@media (min-width: 1200px) and (max-width: 1599px) {}
@media (min-width: 1600px) {}
```

## Dark Mode
```css

@media (prefers-color-scheme: dark) {
  body {
      background-color: #303030;
      color: #ddd
  }

  a {
    color: #66D9EF;
    text-decoration: none;
  }

  a:hover {
    color: #000;
    background-color: #66D9EF;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
      color: #eee;
    }

  #nav-bg, a#logo, #top-nav a {
    background-color: #A6E22E;
    color: #202020;
  }

  a:hover > code  {
      background-color: #66D9EF;
  }

  .accent {
      color: #F92672;
  }
}
```

# @media print

```css
@media print {
  #nav-bg, #logo, #top-nav { display: none; }
  h1.title ~ p.center.gap.accent { display: none; }
  .youtube-wrapper { display: none; }
  html { font-size: 1em; font-family: sans-serif; }
  body { background: none; }
  #content { max-width: none; }
  h1.title { text-align: center; }
  h1, h2, h3, h4, h5, h6 { break-after: avoid-page; page-break-after: avoid; }
  #content hr:last-of-type { display: none; }
  #content pre { break-inside: avoid-page; page-break-inside: avoid; }
  #content div.small:last-of-type { display: none; }
}
```