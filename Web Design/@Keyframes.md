# More Keyframes

```css
@keyframes blink {
  50%{background-color:transparent}
}

@keyframes bottomEnd {
  0% { bottom: 0; }
  50% { bottom: -15px; }
  100% { bottom: 0; }
}
.bottomEnd {
  animation: bottomEnd 0.3s;
  position: relative;
}

@keyframes bounce {
  0%,17%,25%,34%,50%,58%,
  67%,84%,92%,100% {transition-timing-function: cubic-bezier(0.215,0.610,0.355,1.000)}
  0%{opacity:.5;transform: scale3d(1,1,1)}
  20%{opacity:1;transform: scale3d(1.5,1.5,1.5)}
  40%{transform: scale3d(.9,.9,.9)}
  60%{transform: scale3d(1.5,1.5,1.5)}
  80%{transform: scale3d(.9,.9,.9)}
  100%{transform: scale3d(1,1,1)}
}

@keyframes fadein {
  From { opacity : 0; }
  To { opacity : 1; }
}

@keyframes highlight-pulse {
  0% { background-color:#f6c342; }
  50% { background-color: rgba(246,195,66,0.3); }
  100% { background-color: #f6c342; }
}

@keyframes leftEnd {
  0% { left: 0; }
  50% { left: 15px; }
  100% { left: 0; }
}
.leftEnd {
  animation: leftEnd 0.3s;
  position: relative;
}

@keyframes progressSlide {
  0% { left: 0 }
  50% { left: 90% }
  to { left: 0 }
}

@keyframes rightEnd {
  0% { left: 0; }
  50% { left: -15px; }
  100% { left: 0; }
}
.rightEnd {
  animation: rightEnd 0.3s;
  position: relative;
}

@keyframes scaling {
  0% { transform: scale(.2)}
  50% { transform: scale(1.5)}
  To { transform: scale(1)}
}

@keyframes shake {
  0% { left: -5px; }
  100% { right: -5px; }
}
.validation-error {
  position: relative;
  animation: shake .1s linear;
  animation-iteration-count: 1;
}

@keyframes slide-in {
  from{right:-280px}
  to{right:0px}
}

@keyframes slide-out {
  from{right:0px}
  to{right:-280px}
}

@keyframes topEnd {
  0% { top: 0; }
  50% { top: -15px; }
  100% { top: 0; }
}
.topEnd {
  animation: topEnd 0.3s;
  position: relative;
}

```
