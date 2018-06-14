// ==UserScript==
// @name         github: invert favicon
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Alan Bernstein
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // thanks https://stackoverflow.com/questions/16745773/embed-favicon-using-a-userscript
    window.addEventListener('load', function() {
        var favicon = document.querySelector('link[rel~="icon"]');
        var clone = favicon.cloneNode(!0);
        //clone.href = "https://raw.githubusercontent.com/alanbernstein/github-favicon-invert/master/github-favicon-inverted.png?3";
        clone.href = "data:image/png;base64,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"
        favicon.parentNode.removeChild(favicon);
        document.head.appendChild(clone);
    }, false);

})();
