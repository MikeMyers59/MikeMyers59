function enhancetextarea(classname){
var alltextareas=document.getElementsByTagName("textarea")
var docurl=window.location.href
var codecontainercount=0
for (var i=0; i<alltextareas.length; i++){
if (docurl.indexOf("csslibrary")!=-1 && alltextareas[i].className=="codecontainer"){
var curtextarea=alltextareas[i]
codecontainercount++

var helperbar=document.createElement("div")
helperbar.innerHTML='<div class="selectcode"><a href="#selectcode" class="tabs">Select Code</a> <a href="#expandcode" class="tabs">Expand</a></div>'
var helperbarlinks=helperbar.getElementsByTagName("a")
if (curtextarea.offsetHeight>=curtextarea.scrollHeight){
helperbarlinks[1].style.display="none"
curtextarea.style.overflowY="hidden"
}

helperbarlinks[0].setAttribute("rel", i)

helperbarlinks[0].onclick=function(){
var targettextarea=document.getElementsByTagName("textarea")[parseInt(this.rel)]
targettextarea.select()
return false
}

helperbarlinks[1].setAttribute("rel", i)
helperbarlinks[1].setAttribute("rev", curtextarea.offsetHeight+" defaultHeight")

helperbarlinks[1].onclick=function(){
var targettextarea=document.getElementsByTagName("textarea")[parseInt(this.rel)]
if (this.getAttribute("rev").indexOf("defaultHeight")!=-1){// if textarea is default height
targettextarea.style.height=targettextarea.scrollHeight+"px"
this.innerHTML="Contract"
targettextarea.style.overflowY="hidden"
targettextarea.style.borderStyle="solid"
this.setAttribute("rev", this.getAttribute("rev").replace("defaultHeight", "scrollHeight"))
if (this.scrollIntoView)
this.scrollIntoView()
return false
}
else{
targettextarea.style.height=parseInt(this.getAttribute("rev"))+"px"
this.innerHTML="Expand"
targettextarea.style.overflowY="scroll"
targettextarea.style.borderStyle="dashed"
this.setAttribute("rev", this.getAttribute("rev").replace("scrollHeight", "defaultHeight"))
}
return false
}
curtextarea.style.marginTop=0
curtextarea.parentNode.insertBefore(helperbar, alltextareas[i])
}
}
}

window.onload=function(){
enhancetextarea()
}

function ddbookmarkit(id){
var codetitle=document.getElementById("csscodetitle").innerHTML+" (CSS code)"
if (id=="deli")
window.open('http://del.icio.us/post?&url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(codetitle))
else if (id=="furl")
window.open('http://www.furl.net/storeIt.jsp?u='+encodeURIComponent(location.href)+'&t='+encodeURIComponent(codetitle))
else if (id=="digg")
window.open('http://www.digg.com/submit?phase=2&url='+encodeURIComponent(location.href))
return false
}

function html2entities(){
var re=/[(<>"'&]/g
for (var i=0; i<arguments.length; i++)
arguments[i].value=arguments[i].value.replace(re, function(m){return replacechar(m)})
}

function replacechar(match){
if (match=="<")
return ""
else if (match==">")
return ""
}