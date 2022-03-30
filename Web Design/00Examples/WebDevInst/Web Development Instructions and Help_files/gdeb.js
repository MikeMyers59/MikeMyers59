/*=======================
 IE 8 AddEventListener Polyfill 
========================*/
(function() {
  if (!Event.prototype.preventDefault) {
    Event.prototype.preventDefault=function() {
      this.returnValue=false;
    };
  }
  if (!Event.prototype.stopPropagation) {
    Event.prototype.stopPropagation=function() {
      this.cancelBubble=true;
    };
  }
  if (!Element.prototype.addEventListener) {
    var eventListeners=[];
    
    var addEventListener=function(type,listener /*, useCapture (will be ignored) */) {
      var self=this;
      var wrapper=function(e) {
        e.target=e.srcElement;
        e.currentTarget=self;
        if (listener.handleEvent) {
          listener.handleEvent(e);
        } else {
          listener.call(self,e);
        }
      };
      if (type=="DOMContentLoaded") {
        var wrapper2=function(e) {
          if (document.readyState=="complete") {
            wrapper(e);
          }
        };
        document.attachEvent("onreadystatechange",wrapper2);
        eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper2});
        
        if (document.readyState=="complete") {
          var e=new Event();
          e.srcElement=window;
          wrapper2(e);
        }
      } else {
        this.attachEvent("on"+type,wrapper);
        eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper});
      }
    };
    var removeEventListener=function(type,listener /*, useCapture (will be ignored) */) {
      var counter=0;
      while (counter<eventListeners.length) {
        var eventListener=eventListeners[counter];
        if (eventListener.object==this && eventListener.type==type && eventListener.listener==listener) {
          if (type=="DOMContentLoaded") {
            this.detachEvent("onreadystatechange",eventListener.wrapper);
          } else {
            this.detachEvent("on"+type,eventListener.wrapper);
          }
          eventListeners.splice(counter, 1);
          break;
        }
        ++counter;
      }
    };
    Element.prototype.addEventListener=addEventListener;
    Element.prototype.removeEventListener=removeEventListener;
    if (HTMLDocument) {
      HTMLDocument.prototype.addEventListener=addEventListener;
      HTMLDocument.prototype.removeEventListener=removeEventListener;
    }
    if (Window) {
      Window.prototype.addEventListener=addEventListener;
      Window.prototype.removeEventListener=removeEventListener;
    }
  }
})();
/*=========================
 End IE 8 AddEventListener Polyfill 
========================*/



/*=======================
 IE 8 indexOf Polyfill 
========================*/
// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Reference: http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {

    var k;

    // 1. Let O be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of O with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
/*=========================
 End IE 8 indexOf Polyfill 
========================*/

/*========================
 Begin classList Polyfill
=========================*/

(function () {

if (typeof window.Element === "undefined" || "classList" in document.documentElement) return;

var prototype = Array.prototype,
    push = prototype.push,
    splice = prototype.splice,
    join = prototype.join;

function DOMTokenList(el) {
  this.el = el;
  // The className needs to be trimmed and split on whitespace
  // to retrieve a list of classes.
  var classes = el.className.replace(/^\s+|\s+$/g,'').split(/\s+/);
  for (var i = 0; i < classes.length; i++) {
    push.call(this, classes[i]);
  }
};

DOMTokenList.prototype = {
  add: function(token) {
    if(this.contains(token)) return;
    push.call(this, token);
    this.el.className = this.toString();
  },
  contains: function(token) {
    return this.el.className.indexOf(token) != -1;
  },
  item: function(index) {
    return this[index] || null;
  },
  remove: function(token) {
    if (!this.contains(token)) return;
    for (var i = 0; i < this.length; i++) {
      if (this[i] == token) break;
    }
    splice.call(this, i, 1);
    this.el.className = this.toString();
  },
  toString: function() {
    return join.call(this, ' ');
  },
  toggle: function(token) {
    if (!this.contains(token)) {
      this.add(token);
    } else {
      this.remove(token);
    }

    return this.contains(token);
  }
};

window.DOMTokenList = DOMTokenList;

function defineElementGetter (obj, prop, getter) {
    if (Object.defineProperty) {
        Object.defineProperty(obj, prop,{
            get : getter
        });
    } else {
        obj.__defineGetter__(prop, getter);
    }
}

defineElementGetter(Element.prototype, 'classList', function () {
  return new DOMTokenList(this);
});

})();

/*========================
 End classList Polyfill
=========================*/

/*====================================
 Begin getElementsByClassName Polyfill
=====================================*/

// Support IE8 only
if (!document.getElementsByClassName) {
  document.getElementsByClassName = function(search) {
    var d = document, elements, pattern, i, results = [];
    if (d.querySelectorAll) {
      return d.querySelectorAll("." + search);
    }
  }
}

/*====================================
 End getElementsByClassName Polyfill
=====================================*/

/*=======================
 Begin Helper Functions
========================*/

/**
* getURLQueryVariable - retrive a url parameter value for use
*   string @name - name of parameter value you want
*   bool @noDecode - if true, the given parameter will not be run through decodeURIComponent
*/
function getURLQueryVariable(name,noDecode) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == name) {
      if (noDecode) {
        return pair[1];
      }
      else {
        return decodeURIComponent(pair[1]);
      }
    }
  }
  return(false);
}

/**
* eb_showMessage - displays a toast message
*   string @text - text of the message to be displayed
*   int @type - the type of message to be displayed: info = 0, success = 1, warning = 2, error = 3
*/
function eb_showMessage(text,type) {
  var msg = document.createElement('div');
  msg.textContent = text;
  switch(type) {
    case 1:
      msg.className = 'msg successMsg showHideMsg';
      break;
    case 2:
      msg.className = 'msg warningMsg showHideMsg';
      break;
    case 3:
      msg.className = 'msg errorMsg showMsg';
      break;
    default:
      msg.className = 'msg showHideMsg';
  }
  document.body.appendChild(msg);
  if (type == 3) {
    msg.addEventListener('click',function(){document.body.removeChild(msg);});
  }
  else {
    setTimeout(function(){document.body.removeChild(msg);},5000);
  }
}

/**
* eb_requestGet - issue an AJAX "GET" request to the given url, show messages on error by default
*   string @url - the url to get
*   function @successCallback - the function to call on success (status 200), the request object will be passed as the sole parameter
*   function @failureCallback - the function to call on failure (not status 200), the request object will be passed as the sole parameter
*   bool @suppressMessages - if true, messages will not be displayed error
*/
function eb_requestGet(url,successCallback,failureCallback,suppressMessages) {
  var showMessages = !suppressMessages;
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (req.readyState==4) {
      if (req.status==200) {
        if (successCallback) {
          successCallback(req);
        }
      }
      else if (req.status==0) {
        if (showMessages) {
          eb_showMessage('Server busy, please wait a few moments and try again.',3);
        }
        if (failureCallback) {
          failureCallback(req);
        }
      }
      else {
        if (showMessages) {
          eb_showMessage('Error '+req.status+': '+req.statusText,3);
        }
        if (failureCallback) {
          failureCallback(req);
        }
      }
    }
  };
  req.open('GET',url,true);
  req.send();
}

/**
* eb_requestPost - issue an AJAX "POST" request to the given url, show messages on error by default
*   string @url - the url to post
*   string @data - the data to send
*   function @successCallback - the function to call on success (status 200), the request object will be passed as the sole parameter
*   function @failureCallback - the function to call on failure (not status 200), the request object will be passed as the sole parameter
*   bool @suppressMessages - if true, messages will not be displayed error
*/
function eb_requestPost(url,data,successCallback,failureCallback,suppressMessages) {
  var showMessages = !suppressMessages;
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (req.readyState==4) {
      if (req.status==200) {
        if (successCallback) {
          successCallback(req);
        }
      }
      else if (req.status==0) {
        if (showMessages) {
          eb_showMessage('Server busy, please wait a few moments and try again.',3);
        }
        if (failureCallback) {
          failureCallback(req);
        }
      }
      else {
        if (showMessages) {
          eb_showMessage('Error '+req.status+': '+req.statusText,3);
        }
        if (failureCallback) {
          failureCallback(req);
        }
      }
    }
  };
  req.open('POST',url,true);
  req.withCredentials=true;
  req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  req.send(data);
}

/*======================
 End Helper Functions
======================*/

document.addEventListener("DOMContentLoaded", function(event) {

    /* Change class of universal header upon chevron click 
        Reveals/hides universal header */
    function showHideUnivHeader (event) {
      event.preventDefault();
      
      var show = document.getElementById('show-univ'),
          headerContainer = document.getElementById('univ-header-container'),
          header = document.getElementById('univ-header');
  
      headerContainer.classList.toggle('univ-header-container-open');
      header.classList.toggle('univ-header-open');
      
      if (document.getElementById('newsTable').childNodes.length == 1) {
          document.getElementById('univ-header-news').style.display = 'none';
      }
      
      if (show.classList.contains('fa-chevron-down')) {
          show.classList.remove('fa-chevron-down');
          show.classList.add('fa-chevron-up');
      } else {
          show.classList.remove('fa-chevron-up');
          show.classList.add('fa-chevron-down');
      }
    }
    var showUniv = document.getElementById('show-univ');
    if (showUniv) {
      showUniv.addEventListener('click', showHideUnivHeader, false);
    }

    /* Form validation for simple directory search
        Requires at least 1 field to have content */
    function checkPhoneBookForm (event) {
        event.preventDefault();
        if (simpleSearch.elements['lname'].value == "" && simpleSearch.elements['fname'].value == "" && simpleSearch.elements['mname'].value == "" && simpleSearch.elements['badge'].value == "" && simpleSearch.elements['dept'].value == "" && simpleSearch.elements['phone_combined'].value == "")
        {
            alert("You have not entered any search criteria for your Employee Directory Search.");
            return false;
        }
        else
        {
            simpleSearch.submit();
            return false;
        }    
    }
    var simpleSearch = document.getElementById('simpleSearch');
    if (simpleSearch) {
      simpleSearch.addEventListener('submit', checkPhoneBookForm, false);
    }

    /* Form validation for intranet search */
    function checkIntranetForm (event) {
        event.preventDefault();
        if (intranetSearch.elements['zoom_query'].value == "") {
            alert("You have not entered any search criteria for your Intranet Search.");
            return false;
        }
        else {
            // if search is performed from Computer Systems Support filter results to just Computer Systems Support
            var compMatch = /\/comp_sys_sup/;
            if (compMatch.test(window.location.pathname.toString())){
                intranetSearch.elements['zoom_cat[]'].value = 4;
            }
            intranetSearch.submit();
            return false;
        }   
    }
    var intranetSearch = document.getElementById('intranetSearch');
    if (intranetSearch) {
      intranetSearch.addEventListener('submit', checkIntranetForm, false);
    }

    /* Form validation for wiki search */
    function checkWikiForm (event) {
        event.preventDefault();
        if (wikiSearch.elements['search'].value == "") {
            alert("You have not entered any search criteria for your Wiki Search.");
            return false;
        }
        else {
            wikiSearch.submit();
            return false;
        }
    }
    var wikiSearch = document.getElementById('wikiSearch');
    if (wikiSearch) {
      wikiSearch.addEventListener('submit', checkWikiForm, false);
    }
});

