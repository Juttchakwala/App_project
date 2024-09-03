const allowedIPs = ['192.168.1.1', '192.168.1.2']; // Replace with your allowed IPs

async function checkAccess() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const userIP = data.ip;

        if (allowedIPs.includes(userIP)) {
            document.getElementById('content').style.display = 'block';
            document.getElementById('message').style.display = 'none';
        } else {
            document.getElementById('message').textContent = 'Access Denied: You are not registered.';
        }
    } catch (error) {
        console.error('Error fetching IP address:', error);
        document.getElementById('message').textContent = 'Unable to verify access.';
    }
}

checkAccess();￼Enter
