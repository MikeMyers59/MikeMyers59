# @Print

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

@page Section1 {
  size:8.5in 11.0in;
  margin:1.0in 1.25in 1.0in 1.25in;
  mso-header-margin:.5in;
  mso-footer-margin:.5in;
  mso-paper-source:0;
}

```

