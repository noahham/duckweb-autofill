document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const saveButton = document.getElementById('saveButton');
    const statusDiv = document.getElementById('status');

    // Load any saved credentials when the popup opens
    chrome.storage.sync.get(['duckwebUsername', 'duckwebPassword'], function(items) {
        if (items.duckwebUsername) {
            usernameInput.value = items.duckwebUsername;
        }
        if (items.duckwebPassword) {
            passwordInput.value = items.duckwebPassword;
        }
    });

    // Save credentials when the button is clicked
    saveButton.addEventListener('click', function() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        chrome.storage.sync.set({
            'duckwebUsername': username,
            'duckwebPassword': password
        }, function() {
            // Notify the user that settings were saved
            statusDiv.textContent = 'Credentials saved!';
            setTimeout(() => { statusDiv.textContent = ''; }, 2000); // Clear message after 2s
            // Optionally close the popup after saving
            window.close();
        });
    });
});