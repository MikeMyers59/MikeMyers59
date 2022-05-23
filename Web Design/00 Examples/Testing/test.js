// This is the Test JavaScript Library

// Common Constants & Values
// *************************************************************************************
  var cOKCancel = 1;
  var cInformation = 64;
  var cCancel = 2;

// Common Functions
// *************************************************************************************
function clockTick() {
  currentTime = new Date();
  document.clock_form.clock.value = " "+currentTime;
  document.clock_form.clock.blur();
  setTimeout("clockTick()", 1000);
}

function Greeting() {
  var dToday = new Date();
  sMessage = "<p><b><center> Greetings! Good ";
  dHours = dToday.getHours();
  if (dHours < 6) {
    sMessage +=  "(Early) Morning! ?";
  }
  else if (dHours < 12) {
    sMessage +=  "Morning!";
  }
  else if (dHours < 18) {
    sMessage += "Afternoon!";
  }
  else {
    sMessage += "Evening!";
  }
  return sMessage + "</center></b></p>";
}