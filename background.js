require('dotenv').config();


const webhookUrl = process.env.WEBHOOK_URL;

// Fetch the user ID from Chrome storage
function getUserId(callback) {
  chrome.storage.local.get("userId", function (data) {
    callback(data.userId || "unknown_user");
  });
}

// Send URL + user ID to Google Sheets
function sendUrlWithUserId(url) {
  getUserId(function (userId) {
    fetch(webhookUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        url: url,
      }),
    })
      .then(() => console.log("Logged:", userId, url))
      .catch(err => console.error("Error logging URL:", err));
  });
}

// On tab updated
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.url) {
    sendUrlWithUserId(tab.url);
  }
});

// On tab activated
chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab.url && tab.url.startsWith("http")) {
      sendUrlWithUserId(tab.url);
    }
  });
});

// On window focus changed
chrome.windows.onFocusChanged.addListener(windowId => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) return;
  chrome.windows.get(windowId, { populate: true }, (window) => {
    const activeTab = window.tabs.find(t => t.active);
    if (activeTab && activeTab.url && activeTab.url.startsWith("http")) {
      sendUrlWithUserId(activeTab.url);
    }
  });
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({
      url: chrome.runtime.getURL("popup.html")
    });
  });
  
