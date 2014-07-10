chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    chrome.tabs.executeScript(null, {
        file: "site-js/" + request.site + ".js"
    });
    sendResponse({
        msg: "ok"
    })
});
