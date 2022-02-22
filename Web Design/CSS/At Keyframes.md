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

