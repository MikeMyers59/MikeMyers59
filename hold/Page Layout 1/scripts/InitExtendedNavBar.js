; (function ($) {
    $(function () {
        function findMatchingLink(ul) {
            var previous = ul.prev();
            if (typeof previous !== 'undefined') {
                // Verify the previous element is what we expected.
                if (previous.attr("title") == ul.attr("aria-labelledby") || previous.attr("id") == ul.attr("aria-labelledby"))
                    return previous;
            }
            return null;
        }
        function updateAccessibilityAttr(item, isShowing) {
            var $prevA = item.prev('a');
            if ($prevA.length > 0) $prevA.attr('aria-expanded', isShowing);
        }

        if ($('html').attr('dir') == 'rtl') {
            $('#main-menu').addClass('sm-rtl');
        }

        // jquery.smartmenus.keyboard.csod.js is written only for horizontal & one level menu.
        $('#main-menu').smartmenus({
            subMenusSubOffsetX: 1,
            subMenusSubOffsetY: -8,
            showFunction: function (item, complete) {
                item.show(this.opts.showDuration, complete);
                updateAccessibilityAttr(item, true);

                var link = findMatchingLink(item);
                if (link != null) {
                    link.attr("aria-expanded", "true")
                }


            },
            hideFunction: function (item, complete) {
                // visually hide item immediately but need delay to hide item in HTML for shift+tab keydown event on dropdown items
                item.css({ "top": "-9999px" }).hide(this.opts.hideDelay, complete);
                updateAccessibilityAttr(item, false);

                var link = findMatchingLink(item);

                if (link != null) {
                    link.attr("aria-expanded", "false");
                }


            }
        });

        $('#main-menu').smartmenus('keyboardSetHotkey', '123', 'shiftKey');
        // This is a workaround for javascript issues found in Chrome 57. Please deprecate once
        // people have updated from this version (assuming later versions don't also experience the issue)
        if (navigator.userAgent.indexOf('Chrome/57.') >= 0) {
            console.log($('#main-menu li'));
        }
        // End of Chrome 57 workaround
    })

})(jQuery);
