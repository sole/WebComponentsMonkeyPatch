/**
 * Evidently superinspired by Chris Wilson's AudioContext-MonkeyPatch library,
 * and just patching webkitCreateShadowRoot to createShadowRoot
 */
(function() {

    if(  HTMLElement.prototype.webkitCreateShadowRoot !== undefined &&
         HTMLElement.prototype.createShadowRoot === undefined ) {

        HTMLElement.prototype.createShadowRoot = HTMLElement.prototype.webkitCreateShadowRoot;

    }

})();

(function() {
  if('register' in document || 'registerElement' in document){
    document.register = document.registerElement = document.register || document.register;
  }
})();
