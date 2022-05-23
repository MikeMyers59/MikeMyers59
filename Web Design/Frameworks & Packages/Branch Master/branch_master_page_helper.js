/*****************************************************************************
File Name  : branch_master_page_helper.js
Author     : S. Davison (145385)
Description: file for custom functions
******************************************************************************/
//Set Global Variables
var vaProgramDocumentsClientContext = null;

//When the DOM has loaded execute Javascript
document.addEventListener("DOMContentLoaded", function(event) {
  var anchors = document.getElementsByTagName("a");
  var ANCHORS_LENGTH = anchors.length;
  for(var i=ANCHORS_LENGTH;i--;) {
    if(anchors[i].href.toLowerCase().startsWith("http://groton")) {
      anchors[i].href = anchors[i].href.toLowerCase().replace("http://groton","Notes://GROTON");
    }
    if(anchors[i].href.toLowerCase().startsWith("https://groton")) {
      anchors[i].href = anchors[i].href.toLowerCase().replace("https://groton","Notes://GROTON");
    }
  }
});