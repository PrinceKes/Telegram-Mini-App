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


// Ensure the DOM is fully loaded before accessing the Telegram WebApp object
document.addEventListener('DOMContentLoaded', function () {
    // Check if the Telegram object and WebApp property are defined
    if (typeof Telegram !== 'undefined' && Telegram.WebApp) {
        try {
            // Safely access the WebApp properties or methods here
            const webApp = Telegram.WebApp;
            
            // Log WebApp initialization to the console
            console.log('Telegram WebApp initialized:', webApp);
            
            // Example of working with WebApp properties
            const appData = webApp.initDataUnsafe || {};
            console.log('WebApp data:', appData);
            
            // Example: Setting the background color of the WebApp
            webApp.setBackgroundColor('#ffffff');

        } catch (error) {
            console.error('An error occurred while interacting with Telegram WebApp:', error);
        }
    } else {
        console.error('Telegram WebApp is not available or has not been initialized.');
    }
});

// Function to update the balance and log information to the console
function updateBalance() {
    const userId = getUserId(); // Assume getUserId() is a function that returns the user ID

    // Ensure userId is available
    if (!userId) {
        console.error('User ID is not defined.');
        return;
    }

    // Show a loading indicator or default message while fetching
    const balanceElement = document.getElementById('wallet-balance');
    console.log('Fetching wallet balance...');
    balanceElement.innerText = 'Loading...';

    fetch('http://192.168.222.34:5000/get_balance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: userId }),
    })
    .then(response => {
        console.log('Received response:', response);
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Parsed JSON data from server:', data);
        if (data.status === 'success' && typeof data.balance === 'number') {
            const formattedBalance = `₦${parseFloat(data.balance).toLocaleString('en-NG', { minimumFractionDigits: 2 })}`;
            balanceElement.innerText = formattedBalance;
            console.log('Updated balance displayed on the page:', formattedBalance);
        } else {
            throw new Error('Unexpected response format from the server.');
        }
    })
    .catch(error => {
        console.error('Error fetching balance:', error);
        balanceElement.innerText = 'Error fetching balance';
    });
}

// Function to get the user ID (you'll need to implement this)
function getUserId() {
    // Replace with actual logic to get the user ID
    return '12345'; // Example user ID
}

// Start balance updates when the WebApp is ready (after DOMContentLoaded)
document.addEventListener('DOMContentLoaded', function () {
    console.log('Starting balance updates...');
    updateBalance(); // Fetch immediately
    setInterval(updateBalance, 10000); // Update balance every 10 seconds
});
