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

document.addEventListener("DOMContentLoaded", function(event) {

    /*
        Update page title
    */
    document.getElementById('pagetitle').textContent = document.title;
    
    /* Change class of universal header upon chevron click 
        Reveals/hides universal header */
    document.getElementById('show-univ').addEventListener('click', showHideUnivHeader, false);
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

    /* Form validation for simple directory search
        Requires at least 1 field to have content */
    var simpleSearch = document.getElementById('simpleSearch');
    simpleSearch.addEventListener('submit', checkPhoneBookForm, false);
        
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

    /* Form validation for intranet search */
    var intranetSearch = document.getElementById('intranetSearch');
    intranetSearch.addEventListener('submit', checkIntranetForm, false);

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


    /* Form validation for wiki search */
    var wikiSearch = document.getElementById('wikiSearch');
    wikiSearch.addEventListener('submit', checkWikiForm, false);

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
});

