const dataPlans = {
    AIRTEL: [
        { id: 125, planType: "GIFTING", amount: "₦440.0", size: "1.0 GB", validity: "1 month" },
        { id: 126, planType: "GIFTING", amount: "₦440.0", size: "2.0 GB", validity: "1 month" },
        { id: 129, planType: "GIFTING", amount: "₦1320.0", size: "6.0 GB", validity: "1 month" },
    ],
    GLO: [
        { id: 27, planType: "GIFTING", amount: "₦3240.0", size: "18.0 GB", validity: "1 month" },
        { id: 28, planType: "GIFTING", amount: "₦2430.0", size: "14.0 GB", validity: "1 month" },
        { id: 29, planType: "GIFTING", amount: "₦2025.0", size: "10.8 GB", validity: "1 month" },
    ],
    "9MOBILE": [
        { id: 13, planType: "GIFTING", amount: "₦4050.0", size: "15.0 GB", validity: "1 month" },
        { id: 14, planType: "GIFTING", amount: "₦3240.0", size: "11.0 GB", validity: "1 month" },
        { id: 15, planType: "GIFTING", amount: "₦1620.0", size: "4.5 GB", validity: "1 month" },
    ]
};

// Handle network selection
document.getElementById('network').addEventListener('change', function() {
    const network = this.value;
    const dataTypeSelect = document.getElementById('data-type');
    const dataPlanSelect = document.getElementById('data-plan');
    const costInput = document.getElementById('cost');

    dataTypeSelect.innerHTML = '<option value="">Select Data Type</option>';
    dataPlanSelect.innerHTML = '<option value="">Select Data Plan</option>';
    costInput.value = '';

    if (network) {
        const types = [...new Set(dataPlans[network].map(plan => plan.planType))];
        types.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            dataTypeSelect.appendChild(option);
        });
    }
});

// Handle data type selection
document.getElementById('data-type').addEventListener('change', function() {
    const network = document.getElementById('network').value;
    const type = this.value;
    const dataPlanSelect = document.getElementById('data-plan');
    const costInput = document.getElementById('cost');

    dataPlanSelect.innerHTML = '<option value="">Select Data Plan</option>';
    costInput.value = '';

    if (network && type) {
        const filteredPlans = dataPlans[network].filter(plan => plan.planType === type);
        filteredPlans.forEach(plan => {
            const option = document.createElement('option');
            option.value = plan.id;
            option.textContent = `${plan.size} - ${plan.amount} (${plan.validity})`;
            dataPlanSelect.appendChild(option);
        });
    }
});

// Handle data plan selection
document.getElementById('data-plan').addEventListener('change', function() {
    const network = document.getElementById('network').value;
    const type = document.getElementById('data-type').value;
    const planId = this.value;

    if (network && type && planId) {
        const selectedPlan = dataPlans[network].find(plan => plan.id == planId);
        document.getElementById('cost').value = selectedPlan.amount;
    }
});

// Handle form submission
document.getElementById('data-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Data purchase initiated!');
    // Further actions like sending data to the server can be done here.
});









// function displayDebugMessage(message) {
//     const debugOutput = document.getElementById('debug-output');
//     const messageElement = document.createElement('p');
//     messageElement.textContent = message;
//     debugOutput.appendChild(messageElement);
// }

// document.addEventListener('DOMContentLoaded', function() {
//     const tg = window.Telegram.WebApp;
//     const urlParams = new URLSearchParams(window.location.search);
//     let userId = urlParams.get('user_id');

//     displayDebugMessage('User ID: ' + userId);

//     if (!userId && tg.initDataUnsafe && tg.initDataUnsafe.user) {
//         userId = tg.initDataUnsafe.user.id;
//     }

//     if (userId) {
//         displayDebugMessage('Fetching balance for user ID: ' + userId);

//         fetch('http://192.168.222.34:5000/get_balance', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ user_id: userId }),
//         })
//         .then(response => {
//             displayDebugMessage('Received response: ' + response.status);
//             return response.json();
//         })
//         .then(data => {
//             displayDebugMessage('Received data: ' + JSON.stringify(data));

//             if (data.status === 'success') {
//                 const formattedBalance = `₦${parseFloat(data.balance).toLocaleString('en-NG', { minimumFractionDigits: 2 })}`;
//                 document.getElementById('wallet-balance').innerText = formattedBalance;
//             } else {
//                 displayDebugMessage('Failed to fetch balance: ' + data.message);
//             }
//         })
//         .catch(error => {
//             displayDebugMessage('Error fetching balance: ' + error);
//         });
//     } else {
//         displayDebugMessage('User ID not found.');
//     }
// });



// Function to display messages on the HTML page for debugging
function displayConsoleMessage(message, isError = false) {
    const consoleOutput = document.getElementById('console-output');
    const messageElement = document.createElement('p');
    messageElement.textContent = message;

    if (isError) {
        messageElement.style.color = 'red';
    } else {
        messageElement.style.color = 'green';
    }

    consoleOutput.appendChild(messageElement);
}

// Check if running inside Telegram WebApp environment
if (typeof window.Telegram !== 'undefined' && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;

    // Attempt to fetch user_id from the URL parameter (useful when testing in a normal browser)
    const urlParams = new URLSearchParams(window.location.search);
    let userId = urlParams.get('user_id');

    // Fallback: Fetch user_id directly from Telegram if not found in URL
    if (!userId && tg.initDataUnsafe && tg.initDataUnsafe.user) {
        userId = tg.initDataUnsafe.user.id;
    }

    if (userId) {
        displayConsoleMessage('Fetching balance for user ID: ' + userId);

        // Make a POST request to your backend server to fetch the user's wallet balance
        fetch('https://telegramserverbot.onrender.com/get_balance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: userId }),  // Send the user ID as payload
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Received balance data:', data);  // Log the response data for debugging
                displayConsoleMessage('Received balance data: ' + JSON.stringify(data));  // Show response on HTML page

                if (data.status === 'success') {
                    const formattedBalance = `₦${data.balance.toLocaleString('en-NG', { minimumFractionDigits: 2 })}`;
                    document.getElementById('wallet-balance').innerText = formattedBalance;  // Update the wallet balance element
                    displayConsoleMessage('Balance displayed successfully.');
                } else {
                    displayConsoleMessage('Failed to fetch balance: ' + data.message, true);
                }
            })
            .catch(error => {
                console.error('Error fetching balance:', error);
                displayConsoleMessage('Error fetching balance: ' + error, true);
            });
    } else {
        displayConsoleMessage('User ID not found in URL or Telegram data.', true);
    }
} else {
    displayConsoleMessage('Not running in Telegram WebApp environment. Some functionalities are disabled.', true);

    // Handle running outside Telegram environment: extract user_id from the URL parameter for testing in a browser
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('user_id');

    if (userId) {
        displayConsoleMessage('Fetching balance for user ID (browser mode): ' + userId);

        // Make a POST request to your backend server to fetch the user's wallet balance
        fetch('https://telegramserverbot.onrender.com/get_balance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: userId }),  // Send the user ID as payload
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Received balance data:', data);  // Log the response data for debugging
                displayConsoleMessage('Received balance data: ' + JSON.stringify(data));  // Show response on HTML page

                if (data.status === 'success') {
                    const formattedBalance = `₦${data.balance.toLocaleString('en-NG', { minimumFractionDigits: 2 })}`;
                    document.getElementById('wallet-balance').innerText = formattedBalance;  // Update the wallet balance element
                    displayConsoleMessage('Balance displayed successfully.');
                } else {
                    displayConsoleMessage('Failed to fetch balance: ' + data.message, true);
                }
            })
            .catch(error => {
                console.error('Error fetching balance:', error);
                displayConsoleMessage('Error fetching balance: ' + error, true);
            });
    } else {
        displayConsoleMessage('User ID not found in URL.', true);
    }
}
