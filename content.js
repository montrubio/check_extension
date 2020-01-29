console.log("Checker");
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse){
    console.log(message.txt);
    var buttonc = document.getElementById("buttonId");
    //console.log("button" + buttonc.innerHTML);
    buttonc.click();
}


