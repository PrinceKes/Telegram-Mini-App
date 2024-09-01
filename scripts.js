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









// Function to display messages on the HTML page
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

// Initialize Telegram WebApp (Make sure this exists in your environment)
const tg = window.Telegram.WebApp;

// Attempt to fetch user_id from the URL
const urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get('user_id');

// Fallback: Fetch user_id directly from Telegram if not found in URL
if (!userId && tg.initDataUnsafe && tg.initDataUnsafe.user) {
    userId = tg.initDataUnsafe.user.id;
}

if (userId) {
    displayConsoleMessage('Fetching balance for user ID: ' + userId);

    fetch('http://192.168.222.34:5000/get_balance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: userId }),
    })
    .then(response => response.json())
    .then(data => {
        displayConsoleMessage('Received balance data: ' + JSON.stringify(data));

        if (data.status === 'success') {
            // Format and update the wallet balance on the page
            const formattedBalance = `₦${parseFloat(data.balance).toLocaleString('en-NG', { minimumFractionDigits: 2 })}`;
            document.getElementById('wallet-balance').innerText = formattedBalance;
        } else {
            displayConsoleMessage('Failed to fetch balance: ' + data.message, true);
        }
    })
    .catch(error => {
        displayConsoleMessage('Error fetching balance: ' + error, true);
    });
} else {
    displayConsoleMessage('User ID not found in URL or Telegram data.', true);
}








// Submit purchase function
function submitPurchase() {
    const userId = '<user_id>';  // Get the user ID from the bot or context
    const pin = document.getElementById('pin').value;
    const bundlePrice = getSelectedBundlePrice();  // Get this from your WebView

    fetch('http://127.0.0.1:5000/verify_purchase', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: userId,
            pin: pin,
            bundle_price: bundlePrice
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Purchase successful! Your new balance is: ' + data.new_balance);
        } else {
            alert('Error: ' + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Helper function to get selected bundle price (implement as needed)
function getSelectedBundlePrice() {
    const dataPlanSelect = document.getElementById('data-plan');
    const selectedPlanId = dataPlanSelect.value;
    const network = document.getElementById('network').value;

    if (network && selectedPlanId) {
        const selectedPlan = dataPlans[network].find(plan => plan.id == selectedPlanId);
        return selectedPlan ? selectedPlan.amount : '';
    }
    return '';
}

// Call fetch balance on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    const userId = urlParams.get('user_id'); // Retrieve user ID from URL parameters

    if (userId) {
        fetch('http://127.0.0.1:5000/get_balance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: userId }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                document.getElementById('wallet-balance').textContent = `₦${data.balance.toFixed(2)}`;
            } else {
                alert('Error: ' + data.message);
            }
        })
        .catch((error) => {
            console.error('Error fetching wallet balance:', error);
        });
    }
});