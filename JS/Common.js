// This is the Common JavaScript Module
var ScriptName = "Common.js";
var ScriptVersion = "1.0";

// Routines for Windows Apps
function Launch(program){
  (new ActiveXObject('WScript.Shell')).Run(program);void(0);
}

// Routines for Windows OS
function popWindow(url, name){
  var wndPopup = window.open(url,name,"");
  // Bring new window to foreground
  if(wndPopup) wndPopup.focus();
}


