// script.js

// Function to fetch the user's IP address from a third-party API
async function fetchUserIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error fetching IP address:', error);
        return null;
    }
}

// Function to check if the user's IP is registered
async function checkIP() {
    const messageElement = document.getElementById("message");
    const userIP = await fetchUserIP();

    if (!userIP) {
        messageElement.textContent = "Could not determine your IP address.";
        return;
    }

    if (registeredIPs.includes(userIP)) {
        messageElement.textContent = "You are registered!";
    } else {
        messageElement.textContent = "You are not good.";
    }
}

// Run the check when the page loads
checkIP();
