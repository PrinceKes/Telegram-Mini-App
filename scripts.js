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
// Handle form submission
document.getElementById('data-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userId = new URLSearchParams(window.location.search).get('user_id');
    const pin = document.getElementById('pin').value;
    const network = document.getElementById('network').value;
    const plan = document.getElementById('data-plan').value;
    const cost = parseFloat(document.getElementById('cost').value.replace('₦', '').replace(',', ''));

    if (userId && pin && network && plan && cost) {
        fetch('http://127.0.0.1:5000/api/validate-pin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: userId, pin: pin, network: network, plan: plan, cost: cost }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.valid) {
                alert(data.message);  // Display success or failure message
            } else {
                alert(data.message);
            }
        })
        .catch(error => console.error('Error validating PIN:', error));
    } else {
        alert('Please fill all fields correctly.');
    }
});





// document.getElementById('data-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Data purchase initiated!');
//     // Further actions like sending data to the server can be done here.
// });



// Function to fetch user data
function fetchUserData(userId) {
    // Remove brackets if present (for cases like (USER_ID))
    if (userId.startsWith('(') && userId.endsWith(')')) {
        userId = userId.slice(1, -1);  // Remove brackets
    }

    // Make a GET request to the local Flask server API endpoint
    fetch(`http://127.0.0.1:5000/api/user?user_id=${userId}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.querySelector('.balance-box').innerHTML = 'User not found';
            } else {
                // Populate the HTML elements with user data
                document.getElementById('user-id').textContent = userId;
                document.getElementById('wallet-balance').textContent = data.wallet_balance;
                document.getElementById('phone-number').textContent = data.phone;
            }
        })
        .catch(error => console.error('Error fetching user data:', error));
}

// Extract user_id from URL parameter
const urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get('user_id');  // Extract raw user ID

// Fetch user data if user_id is provided
if (userId) {
    fetchUserData(userId);  // Fetch data using correctly formatted ID
}




// // Function to submit and purchase
// // Handle form submission
// document.getElementById('data-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const userId = new URLSearchParams(window.location.search).get('user_id');
//     const pin = document.getElementById('pin').value;

//     if (userId && pin) {
//         fetch('http://127.0.0.1:5000/api/validate-pin', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ user_id: userId, pin: pin }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.valid) {
//                 alert('PIN is correct. Proceeding with data purchase...');
//                 // Proceed with further actions like purchasing data
//             } else {
//                 alert('Incorrect PIN. Please try again.');
//             }
//         })
//         .catch(error => console.error('Error validating PIN:', error));
//     } else {
//         alert('Please enter a PIN.');
//     }
// });
