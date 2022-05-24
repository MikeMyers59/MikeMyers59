# Fonts

#### Font Families 
| Type | List |  
| --- | --- |  
| sans-serif |  |  

Convert the 'woff' webfont to a regular font (e.g. TTF) using a service such as [Online Font Converter](http://onlinefontconverter.com/). Then edit the converted file with your favorite [font editing software](http://en.wikipedia.org/wiki/Font_editor).
[Specific 'woff' Editor](http://www.high-logic.com/font-editor/fontcreator.html)
[Programming Tools](http://www.freetype.org/)
[Font Forge](http://fontforge.org/)
- [Github](https://github.com/fontforge/fontforge/)

# At Font-Face
Assumes fonts are stored with the page in the fonts folder or uses a CDN call.

## Catamaran
```css
@font-face {
  font-family: 'Catamaran';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/catamaran/v15/o-0bIpQoyXQa2RxT7-5B6Ryxs2E_6n1iPCbd5bjdu2ui.woff2) format('woff2');
  unicode-range: U+0964-0965, U+0B82-0BFA, U+200C-200D, U+20B9, U+25CC;
}
/* latin-ext */
@font-face {
  font-family: 'Catamaran';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/catamaran/v15/o-0bIpQoyXQa2RxT7-5B6Ryxs2E_6n1iPCbd5aDdu2ui.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Catamaran';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/catamaran/v15/o-0bIpQoyXQa2RxT7-5B6Ryxs2E_6n1iPCbd5a7duw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* tamil */
@font-face {
  font-family: 'Catamaran';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/catamaran/v15/o-0bIpQoyXQa2RxT7-5B6Ryxs2E_6n1iPHjd5bjdu2ui.woff2) format('woff2');
  unicode-range: U+0964-0965, U+0B82-0BFA, U+200C-200D, U+20B9, U+25CC;
}
/* latin-ext */
@font-face {
  font-family: 'Catamaran';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/catamaran/v15/o-0bIpQoyXQa2RxT7-5B6Ryxs2E_6n1iPHjd5aDdu2ui.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Catamaran';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/catamaran/v15/o-0bIpQoyXQa2RxT7-5B6Ryxs2E_6n1iPHjd5a7duw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* tamil */
@font-face {
  font-family: 'Catamaran';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/catamaran/v15/o-0bIpQoyXQa2RxT7-5B6Ryxs2E_6n1iPJ_a5bjdu2ui.woff2) format('woff2');
  unicode-range: U+0964-0965, U+0B82-0BFA, U+200C-200D, U+20B9, U+25CC;
}
/* latin-ext */
@font-face {
  font-family: 'Catamaran';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/catamaran/v15/o-0bIpQoyXQa2RxT7-5B6Ryxs2E_6n1iPJ_a5aDdu2ui.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Catamaran';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/catamaran/v15/o-0bIpQoyXQa2RxT7-5B6Ryxs2E_6n1iPJ_a5a7duw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
```

## Open Sans Font */
```css
@font-face{
  font-family:"Open Sans";
  font-weight:300;
  font-style:normal;
  text-rendering:optimizeLegibility;
  src:url(fonts/OpenSans-Light.ttf) format("ttf")
}

@font-face{
  font-family:"Open Sans";
  font-weight:300;
  font-style:italic;
  text-rendering:optimizeLegibility;
  src:url(fonts/OpenSans-LightItalic.ttf) format("ttf")
}

@font-face{
  font-family:"Open Sans";
  font-weight:400;
  font-style:normal;
  text-rendering:optimizeLegibility;
  src:url(fonts/OpenSans-Regular.ttf) format("ttf")
}

@font-face{
  font-family:"Open Sans";
  font-weight:400;
  font-style:italic;
  text-rendering:optimizeLegibility;
  src:url(fonts/OpenSans-Italic.ttf) format("ttf")
}

@font-face{
  font-family:"Open Sans";
  font-weight:600;
  font-style:normal;
  text-rendering:optimizeLegibility;
  src:url(fonts/OpenSans-SemiBold.ttf) format("ttf")
}

@font-face{
  font-family:"Open Sans";
  font-weight:600;
  font-style:italic;
  text-rendering:optimizeLegibility;
  src:url(fonts/OpenSans-SemiBoldItalic.ttf) format("ttf")
}

@font-face{
  font-family:"Open Sans";
  font-weight:700;
  font-style:normal;
  text-rendering:optimizeLegibility;
  src:url(fonts/OpenSans-Bold.ttf) format("ttf")
}

@font-face{
  font-family:"Open Sans";
  font-weight:700;
  font-style:italic;
  text-rendering:optimizeLegibility;
  src:url(fonts/OpenSans-BoldItalic.ttf) format("ttf")
}

@font-face{
  font-family:"Open Sans";
  font-weight:800;
  font-style:normal;
  text-rendering:optimizeLegibility;
  src:url(fonts/OpenSans-ExtraBold.ttf) format("ttf")
}

@font-face{
  font-family:"Open Sans";
  font-weight:800;
  font-style:italic;
  text-rendering:optimizeLegibility;
  src:url(fonts/OpenSansExtraBoldItalic.ttf) format("ttf")
}
```

## Source Sans Pro
```css
@font-face {
  font-family: "Source Sans Pro";
  src: url("fonts/source-sans-pro.eot?#iefix") format("embedded-opentype"),
       url("../fonts/source-sans-pro.woff") format("woff");
  font-style: normal;
  font-weight: 400;
}
@font-face {
  font-family: "Source Sans Pro";
  src: url("fonts/source-sans-pro-600.eot?#iefix") format("embedded-opentype"),
       url("../fonts/source-sans-pro-600.woff") format("woff");
  font-style: normal;
  font-weight: 600;
}
@font-face {
  font-family: "Source Sans Pro";
  src: url("fonts/source-sans-pro-700.eot?#iefix") format("embedded-opentype"),
       url("../fonts/source-sans-pro-700.woff") format("woff");
  font-style: normal;
  font-weight: 700;
}
@font-face {
  font-family: "Source Sans Pro";
  src: url("fonts/source-sans-pro-400-italic.eot?#iefix") format("embedded-opentype"),
       url("../fonts/source-sans-pro-400-italic.woff") format("woff");
  font-style: italic;
  font-weight: 400;
}```

