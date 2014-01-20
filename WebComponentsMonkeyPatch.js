/**
 * Evidently superinspired by Chris Wilson's AudioContext-MonkeyPatch library,
 */
(function() {

    // Unprefixed createShadowRoot
    if( HTMLElement.prototype.webkitCreateShadowRoot !== undefined &&
        HTMLElement.prototype.createShadowRoot === undefined ) {

        HTMLElement.prototype.createShadowRoot = HTMLElement.prototype.webkitCreateShadowRoot;

    }


    // Alias document.register to document.registerElement
    if(document.register !== undefined && document.registerElement === undefined) {

        document.registerElement = document.register;

    }

})();

