document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.querySelector('#checkPage');
  checkPageButton.addEventListener('click', function() {

    //chrome.tabs.executeScript(integer tabId, object details, function callback)
    chrome.tabs.executeScript(null,{code:`
      var h1s = document.querySelectorAll('div'), l = h1s.length
      while(l--)
       h1s[l].style.color = 'red';
      `})

  }, false);
}, false);
