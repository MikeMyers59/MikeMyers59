
var ddimagemap={
maplinks: {},

addEvent:function(target, functionref, tasktype){ //assign a function to execute to an event handler (ie: onunload)
	var tasktype=(window.addEventListener)? tasktype : "on"+tasktype
	if (target.addEventListener)
		target.addEventListener(tasktype, functionref, false)
	else if (target.attachEvent)
		target.attachEvent(tasktype, functionref)
},

createmap:function(imdiv, mapclass, width, height, arrleftpos, arrtoppos){
	var imdiv=document.getElementById(imdiv)
	var alllinks=imdiv.getElementsByTagName('a')
	var curleftpos=1, curtoppos=1
	this.maplinks[mapclass]=[]
	for (var i=0; i<alllinks.length; i++){
		if (alllinks[i].className==mapclass){
			alllinks[i].title=alllinks[i].href.split("/").pop()
			alllinks[i].style.width=width+"px"
			alllinks[i].style.height=height+"px"
			var leftpos=arrleftpos.length%(i+1)
			alllinks[i].style.left=arrleftpos[curleftpos-1]+"px"
			alllinks[i].style.top=arrtoppos[curtoppos-1]+"px"
			this.maplinks[mapclass].push(alllinks[i])
			alllinks[i].onclick=function(){
				var downloaddiv=document.getElementById("download")
				var outputstr='<b>Download icon</b> (right click, and select "Save As"):<br /><br />'
				outputstr+='<img src="'+this.href+'" /><br /><br />'
				outputstr+='<span style="font-size:80%"><b>Filename:</b> '+this.title+'</span>'
				downloaddiv.innerHTML=outputstr
				return false
			}
			curtoppos=(curleftpos==arrleftpos.length)? curtoppos+1 : curtoppos
			curleftpos=(curleftpos<arrleftpos.length)? curleftpos+1 : 1
		}
	}
},

updatelink:function(arrmapclass, relativepath, ext){
	for (var m=0; m<arrmapclass.length; m++){
		var maplinks=this.maplinks[arrmapclass[m]]
		var backtracks=relativepath.match(/\.\.\//g).length
		var newrelativepath=relativepath.replace(/(\.\.\/)/g, '')
		for (var i=0; i<maplinks.length; i++){
			var fileparts=maplinks[i].pathname.split("/")
			for (var b=0; b<backtracks; b++){ //remove paths inside file paths that should be backtracked
				fileparts[fileparts.length-2-b]=''
			}
			var filename=fileparts.pop().replace(/\.\w+/i, "."+ext) //replace extension in filename while extracting it from "fileparts" array
			maplinks[i].title=filename
			fileparts=fileparts.join("/").replace(/^\//, '') //remove "/" prefix in start of pathname in IE
			maplinks[i].href="http://www.dynamicdrive.com/"+fileparts+newrelativepath+filename
		}
	}
},

init:function(imdiv, mapclass, width, height, arrleftpos, arrtoppos){
	this.addEvent(window, function(){ddimagemap.createmap(imdiv, mapclass, width, height, arrleftpos, arrtoppos)}, 'load')

}

}
