document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const saveButton = document.getElementById('saveButton');

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
            // Close the popup after saving
            window.close();
        });
    });
});