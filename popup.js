document.getElementById("save-id").addEventListener("click", function () {
    const userId = document.getElementById("user-id").value;
    
    if (userId) {
      // Save the user ID in Chrome storage
      chrome.storage.local.set({ userId: userId }, function () {
        document.getElementById("status").style.display = "block";
        setTimeout(() => { window.close(); }, 1000);  // Close the popup after a second
      });
    } else {
      alert("Please enter a valid User ID!");
    }
  });
  
  // If the user already has an ID saved, auto-fill the field
  chrome.storage.local.get("userId", function (data) {
    if (data.userId) {
      document.getElementById("user-id").value = data.userId;
    }
  });
  