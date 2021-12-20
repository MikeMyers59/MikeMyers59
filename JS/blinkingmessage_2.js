  <!-- Blinking Message Example.
  // BS_msg is replaced for your message, and check the Form size value
  // for space to present your message.
  // This can also be used for the browser window status message!

  var BS_msg = "This flashing message is created using JavaScript!";
  var speed = 500;  // Determines the frequency of the flashinf message
  var control = 1;  // Used to control display

  function flash()
  {
    if (control == 1)
    {
  //  Use this to display message in status bar:
  //    window.status=BS_msg;
        document.message.face.value=BS_msg;
        control=0;
    }  
    else
    {
  //  Use this to display message in status bar:
  //    window.status="";
        document.message.face.value="";
        control=1;
    }

  // Use a recursive call following a period of time
    setTimeout("flash();",speed); 
  }

// End of Blinking Message Example-->