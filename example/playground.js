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
      btnTemplateAdd.addEventListener('click', templateAdd);
      templateAdd(); // Add an item so the list is not empty (and invisible)
    } else {
      // nope
      resTemplates.className = 'error';
      resTemplates.textContent = 'NOPE';
      btnTemplateAdd.disabled = true;
      missingFeatures.push('templates');
    }

    // CUSTOM ELEMENTS
    // Can we register custom elements?
    if(document.registerElement !== undefined) {
      // good
    } else {
      missingFeatures.push('custom elements');
    }

    return missingFeatures;

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


};
