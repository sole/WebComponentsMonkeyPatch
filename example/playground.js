window.onload = function() {

  if( checkFeatures() ) {
    init();
  } else {
    console.error('One or more of the features we want to test is not available in this browser.');
  }


  // ---

  function checkFeatures() {

    // Are templates available?
    // TODO how to do this?
    
    return true;
  }

  function init() {
    // Templates
    document.getElementById('templateAdd').addEventListener('click', templateAdd);
    templateAdd(); // Add an item so the list is not empty (and invisible)
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
