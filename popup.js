document.getElementById("clickme").addEventListener("click", saveChanges);
document.getElementById("clickme2").addEventListener("click", saveChanges2);
document.getElementById("clickme3").addEventListener("click", saveChanges3);
document.getElementById("textticketNumber")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("clickme").click();
    }
});
document.getElementById("textticketNumber2")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("clickme2").click();
    }
});
document.getElementById("textticketNumber3")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("clickme3").click();
    }
});

function saveChanges() {
        // Get a value saved in a form.
        var theValue = document.getElementById("textarea").value;
        var theTicketNumber=document.getElementById("textticketNumber").value;
        // Check that there's some code there.
        if (!theValue) {
          console.log('Error: No value specified');
          return;
        }
        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'value': theValue}, function() {
          chrome.tabs.update({url: theValue+theTicketNumber});

        });
      }

      function saveChanges2() {
              // Get a value saved in a form.
              var theValue2 = document.getElementById("textarea2").value;
              var theTicketNumber2=document.getElementById("textticketNumber2").value;
              // Check that there's some code there.
              if (!theValue2) {
                console.log('Error: No value specified');
                return;
              }
              // Save it using the Chrome extension storage API.
              chrome.storage.sync.set({'value2': theValue2}, function() {
                chrome.tabs.update({url: theValue2+theTicketNumber2});

              });
            }

            function saveChanges3() {
                    // Get a value saved in a form.
                    var theValue3 = document.getElementById("textarea3").value;
                    var theTicketNumber3=document.getElementById("textticketNumber3").value;
                    // Check that there's some code there.
                    if (!theValue3) {
                      console.log('Error: No value specified');
                      return;
                    }
                    // Save it using the Chrome extension storage API.
                    chrome.storage.sync.set({'value3': theValue3}, function() {
                      chrome.tabs.update({url: theValue3+theTicketNumber3});

                    });
                  }

window.onload = function() {
  if("value"!=null || "value"!=undefined||"value"!="undefined"){
  chrome.storage.sync.get("value", function (obj) {
document.getElementsByName('textarea')[0].value = obj.value;
});
}
if("value2"!=null || "value2"!=undefined||"value2"!="undefined"){
chrome.storage.sync.get("value2", function (obj) {
document.getElementsByName('textarea2')[0].value = obj.value2;
});
}

if("value3"!=null || "value3"!=undefined||"value3"!="undefined"){
chrome.storage.sync.get("value3", function (obj) {
document.getElementsByName('textarea3')[0].value = obj.value3;
});
}
}
