// Get saved credentials from storage
chrome.storage.sync.get(['duckwebUsername', 'duckwebPassword'], function(items) {
    const username = items.duckwebUsername;
    const password = items.duckwebPassword;

    // Check if both username and password exist
    if (username && password) {
        // Find the input fields on the page
        const usernameField = document.getElementById('UserID');
        const passwordField = document.getElementById('PIN'); // Corrected ID based on typical DuckWeb

        // Check if the fields were found
        if (usernameField && passwordField) {
            // Fill the fields
            usernameField.value = username;
            passwordField.value = password;
            console.log('DuckWeb Autofill: Credentials entered.');
        } else {
            console.error('DuckWeb Autofill: Could not find username or password fields on the page.');
            if (!usernameField) console.error('UOID field missing');
            if (!passwordField) console.error('PAC field missing'); // PIN seems more likely than PasswordID
        }
    } else {
        console.log('DuckWeb Autofill: No saved credentials found.');
    }
});