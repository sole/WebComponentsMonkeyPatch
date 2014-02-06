window.onload = function() {

  var missing = init();

  if( missing.length !== 0 ) {
    // Don't be content with a console.log. BE BOLD! Alert the hell out of it! 
    window.alert('One or more of the features we want to test is not available in this browser: ' + missing.join(', ') );
  }


  // ---

  function init() {

    var missingFeatures = [];

    // TEMPLATES
    // Are templates available? We'll figure it out by creating a <template>
    // If it contains a .content attribute, it means the browser at least seems to know
    // what it is doing!
    var resTemplates = document.getElementById('templatesAvailable');
    var btnTemplateAdd = document.getElementById('templateAdd');
    var templateItem = document.createElement('template');

    if(templateItem.content !== undefined) {
      resTemplates.textContent = 'YAY';
      btnTemplateAdd.addEventListener('click', templateAdd, false);
      templateAdd(); // Add an item so the list is not empty (and invisible)
    } else {
      // nope
      resTemplates.className = 'error';
      resTemplates.textContent = 'NOPE';
      btnTemplateAdd.disabled = true;
      missingFeatures.push('templates');
    }


    function templateAdd() {
      var t = document.querySelector("#fancyListItemTemplate");
      var item = t.content.cloneNode(true);

      // Populate content.
      var parentList = document.querySelector('#templateInstancesParent');
      item.querySelector('strong').innerHTML = 'Item number ' + parentList.children.length;
      item.querySelector('em').textContent = "Anything is fine: " + Math.random();
      parentList.appendChild(item);
    }


    // CUSTOM ELEMENTS
    // Can we register custom elements by extending elements?
    // Wrapping in a try and throwing an exception too because currently registering an element
    // which doesn't start with x- won't work in Firefox.
    try {
      var btnExtendElement = document.getElementById('btnExtendElement');
      var btnExtendElementCtor = document.getElementById('btnExtendElementCtor');

      if(document.registerElement !== undefined) {

        var buttonPrototype = Object.create(HTMLButtonElement.prototype);

        buttonPrototype.createdCallback = function() {
          console.log('created');
        };

        var ColourfulButton = document.registerElement('colourful-button', {
          extends: 'button',
          prototype: buttonPrototype
        });

        // TODO: why do these methods differ in their output? First method doesn't 
        // a) create objects with proper 'look' (like they are not inheriting_
        // b) call the createdCallback
        btnExtendElement.addEventListener('click', makeColourfulButton, false);
        btnExtendElementCtor.addEventListener('click', makeColourfulButtonCtor, false);

      } else {
        throw new Error('document.registerElement not available');
      }

    } catch(e) {
        console.log(e.message);
        missingFeatures.push('custom elements');
        btnExtendElement.disabled = true;
    }


    function makeColourfulButton() {
      var btn = document.createElement('colourful-button');
      btn.innerHTML = 'hey';
      document.getElementById('colourfulButtons').appendChild(btn);
    }

    function makeColourfulButtonCtor() {
      var btn = new ColourfulButton();
      btn.innerHTML = 'hey with constructor';
      document.getElementById('colourfulButtons').appendChild(btn);
    }



    return missingFeatures;

  }


  


};
