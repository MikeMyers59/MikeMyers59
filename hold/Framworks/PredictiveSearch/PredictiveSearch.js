function PredictiveSearch(elementId, handler, tokens, onPopulateQuery, onItemSelected, categoryItemsLimit, loTypeLimit, minChars) {
    var self = this;

    self.element = document.getElementById(elementId);

    self.currentItem = -1;

    self.lastQueryTime = null;

    self.searchTimeout = null;
    self.searchDelayInMilliseconds = 250; // milliseconds to wait after the last keystroke before sending the search query

    self.tokens = tokens;
    self.handler = handler;
    self.onPopulateQuery = onPopulateQuery;
    self.onItemSelected = onItemSelected;
    self.categoryItemsLimit = categoryItemsLimit;
    self.loTypeLimit = loTypeLimit;
    self.minChars = minChars;

    function attach(el, evt, handler) {
        if (el.addEventListener) {
            el.addEventListener(evt, handler, false);
        } else if (el.attachEvent) {
            el.attachEvent("on" + evt, handler);
        }
    }

    function findParent(node, tagName) {
        tagName = tagName.toUpperCase();
        while (node) {
            if (node.nodeType == 1 && node.nodeName == tagName) {
                return node;
            }
            node = node.parentNode;
        }
        return null;
    };

    self.initialize = function () {
        if (self.element != null) {
            self.element.setAttribute('autocomplete', 'off');
            self.combobox = document.getElementById('searchHeaderCombobox');
            
            var wrapper = document.createElement("div");
            self.isHeaderSearch = false;
            var width = self.element.parentElement.offsetWidth;
            if (width < 300) {
                wrapper.className = 'ps-wrapper ps-sm-list';
                wrapper.setAttribute('role', 'presentation');
                self.isHeaderSearch = true;
                var searchWrapper = document.getElementsByClassName('c-global-search')
                if (!searchWrapper.length) self.element.parentNode.insertBefore(wrapper, self.element.nextSibling);
                else searchWrapper[0].appendChild(wrapper);
            }
            else {
                wrapper.className = "ps-wrapper";
                self.element.parentNode.insertBefore(wrapper, self.element.nextSibling);
            }

            self.dropdown = document.createElement("ul");
            self.dropdown.className = "ps-list";
            self.dropdown.setAttribute('aria-label', 'search results');
            self.dropdown.style.display = 'none';
            if (self.isHeaderSearch) {
                self.dropdown.id = "csod-predictedsearchHeader";
                self.dropdown.setAttribute('role', 'listbox');
            }
            else {
                self.dropdown.id = 'csod-predictedsearch';
                self.dropdown.setAttribute('role', 'menu');
            }
            wrapper.appendChild(self.dropdown);
            //document.body.appendChild(self.dropdown);

            attach(self.dropdown, 'click', self.click);
            attach(self.element, 'keydown', self.keydown);
            attach(self.element, 'keyup', self.keyup);
            attach(self.element, 'blur', self.blur);
            attach(self.element, 'enter', self.enter);

            attach(window, 'resize', self.resizeShow);
        }
    };

    self.click = function (evt) {

        var src = evt.target || evt.srcElement;
        self.searchElem(src);

        if (evt.preventDefault) {
            evt.preventDefault();
        } else {
            evt.returnValue = false;
        }

        return false;
    };

    self.searchElem = function (src) {
        var link = findParent(src, "a");

        if (link != null) {
            window.location.href = link.href;
        }
    };

    self.selectText = function (text) {

        self.element.value = text;
        self.hide();

        if (self.onItemSelected) {
            window[self.onItemSelected]();
        }
    };

    self.keydown = function (evt) {
        switch (evt.keyCode) {
            case 13:        // enter
                if (self.dropdown.style.display != 'none') {
                    self.openCurrentItem();
                    // if there is an item selected, then cancels global search timer
                    if (globalSearchTimer != null && self.currentItem != -1)
                        // cancels global search timer 
                        clearTimeout(globalSearchTimer);
                    return false;
                }
                break;
            case 27:        // escape
                self.hide();
                if (self.isHeaderSearch) {
                    self.element.value = '';
                    self.selectCurrentItem();
                }
                return false;
            case 38:       // up arrow 
                if (self.currentItem > 0) {
                    self.currentItem--;
                    self.selectCurrentItem();
                }
                else if (self.isHeaderSearch && self.dropdown.style.display != 'none') {
                    if (self.currentItem == -1 || self.currentItem == 0) {
                        self.currentItem = self.getItemCount() - 1;
                        self.selectCurrentItem();
                    }
                }
                return false;
            case 40:        // down arrow
                if (self.currentItem < self.getItemCount() - 1) {
                    self.currentItem++;
                    self.selectCurrentItem();
                }
                 else if (self.isHeaderSearch && self.currentItem >= self.getItemCount() - 1) {
                    self.currentItem = 0;
                    self.selectCurrentItem();
                }
                return false;
            case 39:        // right arrow
            case 37:        // left arrow
            case 36:        // home
            case 35:        // end
                if (!self.isHeaderSearch) break;
                self.currentItem = -1;
                self.selectCurrentItem();
                break;
            default:
                if (!self.isHeaderSearch) break;
                self.currentItem = -1;
                break;
        }
    };

    self.getItemCount = function () {
        var count = 0;

        for (var i = 0; i < self.dropdown.childNodes.length; i++) {
            count += self.dropdown.childNodes[i].childNodes[1].childNodes.length;
        }

        return count;
    };

    self.enter = function (evt) {
        if (self.dropdown.style.display != 'none' && self.currentItem >= 0) {
            evt.veto = true;
        }
    };

    self.keyup = function (evt) {

        evt = (evt) ? evt : ((window.event) ? window.event : "");

        switch (evt.keyCode) {
            case 13:
            case 27:
            case 38:
            case 40:
                break;
            default:
                clearTimeout(self.searchTimeout);
                self.searchTimeout = setTimeout(self.search, self.searchDelayInMilliseconds);
                break;
        }
    };

    self.blur = function () {
        // We don't want to hide immediately if the focus went to a link.
        window.setTimeout(self.hide, 200);
    };

    self.openCurrentItem = function () {
        var index = 0;

        for (var i = 0; i < self.dropdown.childNodes.length; i++) {
            var ul = self.dropdown.childNodes[i].childNodes[1];

            for (var j = 0; j < ul.childNodes.length; j++) {
                if (index == self.currentItem) {
                    var src = ul.childNodes[j].childNodes[0];
                    //self.selectText(src.innerText ? src.innerText : src.textContent);
                    self.searchElem(src);
                }

                index++;
            }
        }
    };

    self.selectCurrentItem = function () {
        if (!self.dropdown.childNodes.length) return;

        var index = 0;
        for (var i = 0; i < self.dropdown.childNodes.length; i++) {
            var ul = self.dropdown.childNodes[i].childNodes[1];

            for (var j = 0; j < ul.childNodes.length; j++) {
                var a = ul.childNodes[j].childNodes[0];

                if (index == self.currentItem) {
                    a.className = 'ps-selected';
                    if (self.isHeaderSearch) {
                        ul.childNodes[j].setAttribute('aria-selected', true);
                        a.setAttribute('tabindex', '0');
                        self.element.setAttribute('aria-activedescendant', ul.childNodes[j].getAttribute("id"));

                    }
                } else {
                    a.className = '';
                    if (self.isHeaderSearch) {
                        ul.childNodes[j].removeAttribute('aria-selected');
                        a.setAttribute('tabindex', '-1');
                    }
                }

                index++;
            }
        }
    };

    self.search = function () {
        var value = self.element.value;

        var thisQueryTime = new Date().getTime();
        self.lastQueryTime = thisQueryTime;

        if (value && value.length >= self.minChars) {
            var query = {
                tokens: self.tokens,
                index: "",
                value: value
            };

            if (self.onPopulateQuery) {
                window[self.onPopulateQuery](query);
            }

            var uri = '{0}?Search={1}&Type={2}&Tokens={3}'
                .replace("{0}", self.handler)
                .replace("{1}", encodeURIComponent(query.value))
                .replace("{2}", encodeURIComponent(query.index))
                .replace("{3}", encodeURIComponent(query.tokens));

            if (self.categoryItemsLimit != null) {
                uri = uri + "&Limit=" + encodeURIComponent(self.categoryItemsLimit);
            }
            if (self.loTypeLimit != null) {
                uri = uri + "&loTypes=" + encodeURIComponent(self.loTypeLimit);
            }

            var xhr;

            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            }
            else {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    if (self.lastQueryTime == thisQueryTime) {
                        self.dropdown.innerHTML = xhr.responseText;

                        if (self.dropdown.innerHTML && self.dropdown.innerHTML != '') {
                            self.show();
                        } else {
                            self.hide();
                        }
                    }
                }
            };

            xhr.open("POST", uri, true);
            xhr.send();
        } else {
            self.hide();
        }
    };

    self.show = function () {
        if (self.isHeaderSearch && self.combobox) 
            self.combobox.setAttribute('aria-expanded', true);
        var _top = self.findTop(self.element);//_target.offsetTop;
        var _left = self.findLeft(self.element.parentElement);
        var _height = self.element.offsetHeight;
        var _width = self.element.parentElement.offsetWidth;
        self.dropdown.style.width = _width - 2 + "px";
        self.dropdown.style.display = 'block';
    };

    //Used to recalculate dimensions when the window is resized, but should only be done if the dropdown was already showing
    self.resizeShow = function () {
        if (self.dropdown.style.display != 'none') {
            self.show();
        }
    }

    self.hide = function () {
        self.currentItem = -1;
        self.dropdown.style.display = 'none';
        if (self.isHeaderSearch && self.combobox) {
            self.combobox.setAttribute('aria-expanded', false);
            self.element.removeAttribute('aria-activedescendant');
        }
    };

    self.findTop = function (obj) {
        var top = 0;
        if (obj.offsetParent) {
            while (1) {
                top += obj.offsetTop;
                if (!obj.offsetParent)
                    break;
                obj = obj.offsetParent;
            }
        }
        else if (obj.y) {
            top += obj.y;
        }
        return top;
    };

    self.findLeft = function (obj) {
        var left = 0;
        if (obj.offsetParent) {
            while (1) {
                left += obj.offsetLeft;
                if (!obj.offsetParent)
                    break;
                obj = obj.offsetParent;
            }
        }
        else if (obj.x) {
            left += obj.x;
        }
        return left;
    }

};