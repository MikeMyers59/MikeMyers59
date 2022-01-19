# Color

If you have an RGB palette that you need to convert to HEX, you can use a converter like this one from [COLORRRS](http://www.webpagefx.com/web-design/hex-to-rgb/).

RGB (Red-Green-Blue) vs. HSL (Hue-Saturation-Luminosity)  

```html
style="--hue: 194.8993288590604; --sat: 97.38562091503269%; --lum: 30%;"
```

```html
hsl(h,s,l)
rbg(r,g,b)
rgba(r,g,b,a) 
```

MS Office Colors
```css
ms-access: #DD337C
ms-excel: #286F4D
ms-one-note: #782173
ms-powerpoint: #CF4427
ms-project: #2E7237
ms-publisher: #087366
ms-visio: #38549E
ms-visual-studio: #67217A
ms-word: #2B5796
```

## Hexadecimal Format

## RGB/RGBa Format
The alpha channel is a deciml value between 0 and 1.0.

Black with different alpha settings
```html
rgba(0,0,0,0.87);
rgba(0,0,0,0.54);
rgba(0,0,0,0.26);
rgba(0,0,0,0.12);
```

## Colors
| Color | Hexadeciaml Format | RGB/RGBa Format |  
| --- | --- | --- |  
| Gray <BR> When R = G = B { 00 to FF }, then color is on the gray scale, where the lower the number, the darker the gray.| #000000   /* Black */ <BR> #292929 <BR> #333333 <BR> #404040 <BR> #444444 <BR> #666666 <BR> #777777 <BR> #888888 <BR> #BFBFBF <BR> #EEEEEE <BR> #F5F5F5 <BR> #FFFFFF   /* White */ | (0,0,0) <BR> (29,29,29,0.6) |  

## Color Value Manipulation un Javascript

### Convert Hexadecimal Color to RGB
```javascript
function hexToRgb(hex) {
  var alpha = ['a','b','c','d','e','f'];
  var rgb = [];
  for (i = 0; i < 6; i++) {
    var x = hex[i];
    if (isNaN(x)) {
      x = alpha.indexOf(x) + 10;
    }
    if (Math.floor(i/2) == i/2) {
      rgb.push(x * 16);
    } else {
      rgb.push(x);
    }
  }
  for (i = 0; i < 6; i += 2) {
    rgb.push(parseFloat(rgb[i]) + parseFloat(rgb[i+1]));
  }
  rgb.splice(0, 6);
  rgbToHsl(rgb);
}
```

### Convert to Hexadecimal
```javascript
function toHex(rgb) {
	rgb = rgb.replace(/[rgb ()]/g, '');
	var hex = rgb.split(',');
	var vals = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
	for (i = 0; i < 3; i++) {
		hex.push(vals[Math.round(hex[0] / 16)]);
		hex.push(vals[hex[0] % 16]);
		hex.shift();
	}
	var str = hex.toString().replace(/,/g, '');
	return str;
}
```

### Convert to Hue (0-255 vs 0-360)
```javascript
function toHue(hue) {
	var x = hue.value;
	x = parseFloat(x);
	if (!x || x == "NaN") {
		hue.value = "0"; return;
	}
	if (Math.abs(x/255) > 1) {
		x = 0;
	}
	if (x < 0) {
		x = x + 255;
	}
	hue.value = x;
}
```

#### Convert to Percentage (0-100)
```javascript
function toPercent(name) {
	var x = name.value;
	if (x == '') {x = '125';
	} else if (isNaN(parseFloat(x))) {
		x = '';
	} else if (parseFloat(x) < 1) {
		if (x.toString().match(/%/g) != null) {
			x = parseFloat(x) + '%';
		} else {x = parseFloat(x) * 100;}
	} else {
		x = parseFloat(x);
	}
	name.value = x;
}
```

### Convert RGB to HSL
```javascript
function rgbToHsl(arr){
  var r = arr[0];
  var g = arr[1];
  var b = arr[2];
  r /= 255;
  g /= 255;
  b /= 255;
  var cmax = Math.max(r, g, b);
  var cmin = Math.min(r, g, b);
  var delta = cmax - cmin;
  var h, s, l = (cmax + cmin) / 2;
  
  if (delta == 0) {
    h = 0;
    s = 0; 
  } else {
    s = delta / (1 - Math.abs(2 * l - 1));
  
    switch (cmax){
      case r: 
        h = (((g - b) / delta) % 6) * 60; 
        break;
      case g: 
        h = ((b - r) / delta + 2) * 60; 
        break;
      case b: 
        h = ((r - g) / delta + 4) * 60; 
        break;
    }
  }
  if (h < 0) {h = h + 360;}
  output(h, s, l);
}
```

