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

