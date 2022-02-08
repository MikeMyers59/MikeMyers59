# Animation

## Spinning
```css
.spin {
  animation:spin 2s infinite linear
}
@keyframes spin{
  0%   {transform:rotate(000deg)}
  90%  {transform:rotate(090deg)}
  180% {transform:rotate(180deg)}
  270% {transform:rotate(270deg)}
  100% {transform:rotate(359deg)}
}

img.wiggle:hover {
  animation: shake 0.5s;
}
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
```

