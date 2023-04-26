chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['./reactApp/react-chrome-app/src/content.js']
    });
  });