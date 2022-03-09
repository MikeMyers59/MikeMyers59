# @Keyframes 

## Examples

```css
@keyframes blink{
  50%{
    background-color:transparent;
    opacity: 0.25;
  }
}
@-moz-keyframes blink{
  50%{
    background-color:transparent;
  }
}
@-webkit-keyframes blink{
  50%{
    background-color:transparent;
  }
}
```

```css
/* wiggle animation */
@keyframes m-homeportBanner-countdownContainer {
  0%   {transform : rotate(0deg); }
  10%  {transform : rotate(-2deg); }
  20%  {transform : rotate(2deg); }
  30%  {transform : rotate(0deg); }
  40%  {transform : rotate(2deg); }
  50%  {transform : rotate(-2deg); }
  60%  {transform : rotate(0deg); }
  70%  {transform : rotate(-2deg); }
  80%  {transform : rotate(2deg); }
  90%  {transform : rotate(0deg); }
  100% {transform : rotate(-2deg); }
}
```

## Examples
```css
@keyframes mymove {
  from {background-color: red;}
  to {background-color: blue;}
}

@keyframes PlugCord{
  from{stroke-dashoffset:100}
  to{stroke-dashoffset:0}
}

@keyframes PlugStart{
  from{transform:translate3d(5%,0,0);opacity:0}
  to{transform:translate3d(0,0,0);opacity:1}
}

@keyframes FadeIn{
  from{opacity:0}
  to{opacity:1}
}

@keyframes Flicker{
  from{opacity:0}
  75%{opacity:.9}
  80%,95%{opacity:.25}
  90%{opacity:.7}
  to{opacity:1}
}
```

