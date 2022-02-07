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
```

