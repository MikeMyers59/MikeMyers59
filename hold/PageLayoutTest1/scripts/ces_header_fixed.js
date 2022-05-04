var userInteractionOptions = {
    showDropdown: false,
    nodeMenubutton: "",
    nodeDropdownmenu: "",
    eventHandlers: {},
    init: function () {
        var elOption = document.getElementById("optionsbtn"),
            elOptDdl = document.getElementById("settingsDd");
        if (elOption != undefined && elOptDdl != undefined) {
            this.nodeMenubutton = elOption;
            this.nodeDropdownmenu = elOptDdl;

            this.HandleButtonKey();
            this.handleDDLKey();
        }
    },
    ShowDropdown: function (id, flag) {
        this.showDropdown = true;
        isRTL = (document.getElementById("dir-rtl") != null) ? true : false;
        var _el = document.getElementById(id);
        if (_el.style.display == "" || _el.style.display == "none") {
            if (_el.parentElement.tagName != "BODY") {
                document.body.appendChild(_el);
            }
            var _target = document.getElementById("settingscontainer");
            var _top = this.findPosY(_target);//_target.offsetTop;
            var _height = _target.offsetHeight;
            var _width = _target.offsetWidth;
            _el.style.visibility = "hidden";
            _el.style.display = "block";
            var _left = this.findPositionX(_target);
            var _ddlWidth = _el.offsetWidth;
            _el.style.zIndex = '99999';
            _el.style.top = ((_top + _height)) + "px";
            _el.style.left = (isRTL) ? _left + "px" : (_left - (_ddlWidth - _width)) + "px";
            _el.style.visibility = "visible";
            var _items = _el.getElementsByTagName('li');
            if (flag) {
                if (flag.which !== undefined && flag.which == 38) {       // 38 = up arrow
                    var _lastItem = _items[_items.length - 1].getElementsByTagName('a')[0];
                    _lastItem.focus();
                }
                else {
                    var _firstItem = _el.getElementsByTagName('li')[0].getElementsByTagName('a')[0]
                    _firstItem.focus();
                }
            }
            // add aria attributes
            document.getElementById('optionsbtn').setAttribute('aria-expanded', true);
            _el.setAttribute('aria-expanded', true);
            _el.setAttribute('aria-hidden', false);

            var _this = this;
            addListener(document.body, 'click', bodyClickEvent, false);
            function bodyClickEvent(e) {
                var isInDDl = _this.nodeDropdownmenu.contains(e.target),
                    isInButton = _this.nodeMenubutton.contains(e.target);
                if (!isInDDl && !isInButton) _this.nodeMenubutton.click();
            }
            function addListener(node, event, handler, capture) {
                if (!(node in _this.eventHandlers)) {
                    // _eventHandlers stores references to nodes
                    _this.eventHandlers[node] = {};
                }
                if (!(event in _this.eventHandlers[node])) {
                    // each entry contains another entry for each event type
                    _this.eventHandlers[node][event] = [];
                }
                // capture reference
                _this.eventHandlers[node][event].push([handler, capture]);
                node.addEventListener(event, handler, capture);
            }

        }
    },
    HideDropdown: function (id, focus) {
        //var _target = document.getElementById("settingscontainer");
        var _this = this,
            _el = document.getElementById(id);
        //_target.appendChild(_el);
        _this.showDropdown = false;

        if (focus) {
            document.getElementById("settingscontainer").getElementsByTagName('a')[0].focus();
        }
        setTimeout(function () {
            if (!_this.showDropdown) {
                _el.style.display = "none";
            }
        }, 150); // delay the hide so links are still clickable


        var _items = _el.getElementsByTagName("li");
        for (i = 0; i < _items.length; i++) {
            _items[i].getElementsByTagName('a')[0].setAttribute('tabindex', '-1');
        }

        // add aria attributes
        document.getElementById('optionsbtn').setAttribute('aria-expanded', false);
        _el.setAttribute('aria-expanded', false);
        _el.setAttribute('aria-hidden', true);

        removeListeners(document.body, 'click');
        function removeListeners(node, event) {
            if (node in _this.eventHandlers) {
                var handlers = _this.eventHandlers[node];
                if (event in handlers) {
                    var eventHandlers = handlers[event];
                    for (var i = eventHandlers.length; i--;) {
                        var handler = eventHandlers[i];
                        node.removeEventListener(event, handler[0], handler[1]);
                    }
                }
            }
        }
    },
    ShowHideDropdown: function (id) {
        var _this = this,
            _el = document.getElementById(id);
        if (_el.style.display == "" || _el.style.display == "none") {
            _this.ShowDropdown(id, false);
        } else {
            _this.HideDropdown(id, true);
        }
    },
    showDDLPopup: function (el) {
        userInteractionOptions.showDropdown = true;

        if (el != null) {
            var elArray = el.getElementsByTagName('a');
            if (elArray != null && elArray.length > 0) {
                for (var i = 0; i < elArray.length - 1; i++) {
                    elArray[i].blur();
                }
            }
        }
    },
    handleDDLKey: function () {
        var _this = this,
            ddlLis = this.nodeDropdownmenu.getElementsByTagName('li');
        for (i = 0; i < ddlLis.length; i++) {
            var elAnchor = ddlLis[i].getElementsByTagName('a')[0];
            if (typeof elAnchor.addEventListener != "undefined") {
                elAnchor.addEventListener("keydown", keydownEvent_menuItems, false);
            } else if (typeof elAnchor.attachEvent != "undefined") {
                elAnchor.attachEvent("keydown", keydownEvent_menuItems, false);
            }
        }
        function keydownEvent_menuItems(e) {
            switch (e.which) {
                case 9: {       // tab
                    var elParentLi = e.target.parentElement,
                        elWrapperUl = _this.nodeDropdownmenu;
                    if (e.shiftKey) {
                        e.stopPropagation();
                        e.preventDefault();
                        _this.HideDropdown('settingsDd', true);
                        _this.nodeMenubutton.focus();
                    } else {
                        e.stopPropagation();
                        e.preventDefault();
                        _this.ShowHideDropdown('settingsDd');
                    }
                    break;
                }
                case 27: {      // esc
                    _this.ShowHideDropdown('settingsDd', true);
                    break;
                }
                case 32: {      // space bar
                    e.preventDefault();
                    e.target.click();
                    break;
                }
                case 38: {      // up arrrow
                    moveFocusToSibling(e, true);
                    break;
                }
                case 40: {      // down arrow
                    moveFocusToSibling(e);
                    break;
                }
            }
        }
        function moveFocusToSibling(e, toPrev) {
            var elParentLi = e.target.parentElement,
                elFocusLi = (toPrev) ? elParentLi.previousElementSibling : elParentLi.nextElementSibling,
                elAtoFocus;
            if (!elFocusLi) {
                var elWrapperUl = _this.nodeDropdownmenu;
                if (toPrev) {
                    var lis = elWrapperUl.getElementsByTagName('li')
                    elAtoFocus = lis[lis.length - 1].getElementsByTagName('a')[0]
                } else {
                    elAtoFocus = elWrapperUl.getElementsByTagName('li')[0].getElementsByTagName('a')[0];
                }
            } else {
                elAtoFocus = elFocusLi.getElementsByTagName('a')[0];
            }
            if (elAtoFocus !== undefined) {
                e.preventDefault();
                elAtoFocus.focus();
            }
        }
    },
    HandleButtonKey: function () {
        var _this = this;
        if (typeof this.nodeMenubutton.addEventListener != "undefined") {
            var nodeOptButton = this.nodeMenubutton;
            nodeOptButton.addEventListener("keydown", keydownEvent_menuButton, false);
            // when screen reader is on, it kills enter, space, arrows keydown.
            // enter and space keydown trigger browser defalut click.  
            // with the click, the 1st nav item needs focus to enble keyboard navigation.
            nodeOptButton.addEventListener("click", focusFirstItem, false);
        } else if (typeof this.nodeMenubutton.attachEvent != "undefined") {
            this.nodeMenubutton.attachEvent("keydown", keydownEvent_menuButton, false);
        }
        function keydownEvent_menuButton(evt) {
            var e = evt || window.event,
                isDdlOpen = window.getComputedStyle(_this.nodeDropdownmenu).display == "block";
            if (isDdlOpen) {
                switch(e.which) {
                    case 13:        // enter
                    case 27:        // esc
                    case 32: {      // space bar
                        _this.HideDropdown('settingsDd', true);
                        break;
                    }
                }
            } else {
                switch (e.which) {
                    case 13:        // enter
                    case 32:        // space bar
                    case 38:        // up arrrow
                    case 40: {      // down arrow
                        e.preventDefault();
                        _this.ShowDropdown('settingsDd', e);
                        break;
                    }
                }
            }
            
        }
        function focusFirstItem() {
            var _firstItem = document.getElementById("settingsDd").getElementsByTagName('li')[0].getElementsByTagName('a')[0];
            _firstItem.focus();
        }
    },
    findPosY: function (obj) {
        var currtop = 0;
        if (obj.offsetParent) {
            while (obj.offsetParent) {
                currtop += obj.offsetTop;
                if (!obj.offsetParent)
                    break;
                obj = obj.offsetParent;
            }
        }
        else if (obj.y) {
            currtop += obj.y;
        }
        return currtop;
    },
    findPositionX: function (obj) {
        var currleft = 0;
        if (obj.offsetParent) {
            while (obj.offsetParent) {
                currleft += obj.offsetLeft;
                if (!obj.offsetParent)
                    break;
                obj = obj.offsetParent;
            }
        }
        else if (obj.x) {
            currleft += obj.x;
        }
        return currleft;
    }
}

window.onload = function () {
    userInteractionOptions.init();
}
