/*  Cursor Trailor Text- By Peter Gehrig (http://www.24fun.ch/)
  Permission given to Dynamicdrive.com to feature script in it's archive.
  For full source code, installation instructions, and 1000's more DHTML scripts,
  visit http://dynamicdrive.com 
*/

  var x,y
  var step=15
  var flag=0

  // Your snappy message. Important: the space at the end of the sentence!!!
  var message="Welcome Aboard!"
  message=message.split("")
  var xpos=new Array()
  for (i=0;i<=message.length-1;i++) {
	xpos[i]=-50
  }

  var ypos=new Array()
  for (i=0;i<=message.length-1;i++) {
	ypos[i]=-50
  }

  function handlerMM(e){
	x = (document.layers) ? e.pageX : document.body.scrollLeft+event.clientX
	y = (document.layers) ? e.pageY : document.body.scrollTop+event.clientY
	flag=1
  }

  function makecursortail() {
	if (flag==1 && document.all) {
	  for (i=message.length-1; i>=1; i--) {
		xpos[i]=xpos[i-1]+step
		ypos[i]=ypos[i-1]
	  }
	  xpos[0]=x+step
	  ypos[0]=y
	  for (i=0; i<=message.length-1; i++) {
		var thisspan = eval("span"+(i)+".style")
		thisspan.posLeft=xpos[i]
		thisspan.posTop=ypos[i]
	  }
	}  /* end of if (flag==1 && document.all) */
	else if (flag==1 && document.layers) {
	  for (i=message.length-1; i>=1; i--) {
		xpos[i]=xpos[i-1]+step
		ypos[i]=ypos[i-1]
	  }
	  xpos[0]=x+step
	  ypos[0]=y
	  for (i=0; i<=message.length-1; i++) {
		var thisspan = eval("document.span"+i)
		thisspan.left=xpos[i]
		thisspan.top=ypos[i]
	  }
	}  /* end of else if (flag==1 && document.layers) */
	var timer=setTimeout("makecursortail()",1)
  } /* end of function makecursortail() */
