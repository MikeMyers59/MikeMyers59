# HTML

```html
<!DOCTYPE html>
<HTML style="--hue: 194.8993288590604; --sat: 97.38562091503269%; --lum: 30%;" lang="en">

</HTML>
```

## Common Elements
| Element|Notes|Roadmap |  
| --- | --- | --- | 
| Anchor||`<A href=URL>  </A>` |  
| Blockquote||`<BLOCKQUOTE>  </BLOCKQUOTE>` |  
| Button||`<BUTTON>  </BUTTON>` |  
| Headers||`<H1>  </H1>` <BR> `<H2>  </H2>` <BR> `<H3>  </H3>` <BR> `<H4>  </H4>` <BR> `<H5>  </H5>` <BR> `<H6>  </H6>` |  
| Image||`<IMG src=URL />` |  
| Script|In Head or Body areas.|`<SCRIPT type="text/javascript" >…</SCRIPT>`|  
| Style|In Head area.|`<STYLE type="text/css" >…</STYLE>` |  

## Default HTML - What's with the mustaches?
```html
<!DOCTYPE html>
<html lang="en">

  {% include head.html %}

  <body>

    {% include nav.html %}

    <div id="content">
    {{ content }}
    </div>

  </body>

</html>
```

## Automatically Relaod Page (5 Second Timer)
```javascript
window.setTimeout('window.location.reload()', 5000)
```

