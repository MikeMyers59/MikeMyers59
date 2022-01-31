# @Media

```css
@media(min-width: 480px) {
}
@media screen and (min-width: 767px) and (max-width: 1199px) {
}
@media screen and (max-width: 766px) {
}
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

