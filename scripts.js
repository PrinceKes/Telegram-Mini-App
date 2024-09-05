const dataPlans = {
        MTN: {
        pk: 1,
        plans: [
            { id: 1001, planType: "GIFTING", amount: "₦100.0", size: "40.0 MB", validity: "1 day" },
            { id: 1002, planType: "GIFTING", amount: "₦200.0", size: "100.0 MB", validity: "1 day" },
            { id: 1003, planType: "GIFTING", amount: "₦300.0", size: "350.0 MB", validity: "7 days" },
            { id: 1004, planType: "GIFTING", amount: "₦500.0", size: "750.0 MB", validity: "14 days" },
            { id: 1005, planType: "GIFTING", amount: "₦1000.0", size: "1.5 GB", validity: "30 days" },
            { id: 1006, planType: "GIFTING", amount: "₦1200.0", size: "2.0 GB", validity: "30 days" },
            { id: 1007, planType: "GIFTING", amount: "₦1500.0", size: "3.5 GB", validity: "30 days" },
            { id: 1008, planType: "GIFTING", amount: "₦2000.0", size: "5.0 GB", validity: "30 days" },
            { id: 1009, planType: "GIFTING", amount: "₦3500.0", size: "10.0 GB", validity: "30 days" },
            { id: 1010, planType: "GIFTING", amount: "₦5000.0", size: "15.0 GB", validity: "30 days" },
            { id: 1011, planType: "GIFTING", amount: "₦10000.0", size: "40.0 GB", validity: "30 days" },
            { id: 1012, planType: "GIFTING", amount: "₦20000.0", size: "75.0 GB", validity: "30 days" },
            { id: 1013, planType: "GIFTING", amount: "₦50000.0", size: "120.0 GB", validity: "30 days" },
            { id: 1014, planType: "CORPORATE GIFTING", amount: "₦250.0", size: "500.0 MB", validity: "7 days" },
            { id: 1015, planType: "CORPORATE GIFTING", amount: "₦500.0", size: "1.0 GB", validity: "7 days" },
            { id: 1016, planType: "CORPORATE GIFTING", amount: "₦1000.0", size: "2.5 GB", validity: "14 days" },
            { id: 1017, planType: "CORPORATE GIFTING", amount: "₦1500.0", size: "4.0 GB", validity: "30 days" },
            { id: 1018, planType: "CORPORATE GIFTING", amount: "₦2500.0", size: "10.0 GB", validity: "30 days" }
        ]
    },
    AIRTEL: {
        pk: 4,
        plans: [
            { id: 125, planType: "GIFTING", amount: "₦440.0", size: "1.0 GB", validity: "1 month" },
            { id: 126, planType: "GIFTING", amount: "₦440.0", size: "2.0 GB", validity: "1 month" },
            { id: 129, planType: "GIFTING", amount: "₦1320.0", size: "6000.0 MB", validity: "1 month" },
            { id: 130, planType: "GIFTING", amount: "₦440.0", size: "750.0 MB", validity: "1 month" },
            { id: 131, planType: "GIFTING", amount: "₦1056.0", size: "1.5 GB", validity: "1 month" },
            { id: 132, planType: "GIFTING", amount: "₦880.0", size: "1.2 GB", validity: "1 month" },
            { id: 133, planType: "GIFTING", amount: "₦1320.0", size: "3.0 GB", validity: "1 month" },
            { id: 134, planType: "GIFTING", amount: "₦1760.0", size: "4.5 GB", validity: "1 month" },
            { id: 135, planType: "GIFTING", amount: "₦2200.0", size: "6.0 GB", validity: "1 month" },
            { id: 136, planType: "GIFTING", amount: "₦2640.0", size: "10.0 GB", validity: "1 month" },
            { id: 137, planType: "GIFTING", amount: "₦4400.0", size: "18.0 GB", validity: "1 month" },
            { id: 138, planType: "GIFTING", amount: "₦3520.0", size: "15.0 GB", validity: "1 month" },
            { id: 139, planType: "GIFTING", amount: "₦8800.0", size: "40.0 GB", validity: "1 month" },
            { id: 140, planType: "GIFTING", amount: "₦13200.0", size: "75.0 GB", validity: "1 month" },
            { id: 141, planType: "GIFTING", amount: "₦17600.0", size: "120.0 GB", validity: "1 month" },
            { id: 212, planType: "CORPORATE GIFTING", amount: "₦136.5", size: "500.0 MB", validity: "1 month" },
            { id: 213, planType: "CORPORATE GIFTING", amount: "₦273.0", size: "1.0 GB", validity: "1 month" },
            { id: 214, planType: "CORPORATE GIFTING", amount: "₦546.0", size: "2.0 GB", validity: "1 month" },
            { id: 215, planType: "CORPORATE GIFTING", amount: "₦1365.0", size: "5.0 GB", validity: "1 month" },
            { id: 216, planType: "CORPORATE GIFTING", amount: "₦27.5", size: "100.0 MB", validity: "1 month" },
            { id: 217, planType: "CORPORATE GIFTING", amount: "₦82.5", size: "300.0 MB", validity: "1 month" },
            { id: 231, planType: "CORPORATE GIFTING", amount: "₦2730.0", size: "10.0 GB", validity: "1 month" },
            { id: 232, planType: "CORPORATE GIFTING", amount: "₦4095.0", size: "15.0 GB", validity: "1 month" },
            { id: 233, planType: "CORPORATE GIFTING", amount: "₦5460.0", size: "20.0 GB", validity: "1 month" },
            { id: 298, planType: "GIFTING", amount: "₦7040.0", size: "30.0 GB", validity: "1 month" },
            { id: 299, planType: "GIFTING", amount: "₦4400.0", size: "30.0 GB", validity: "1 month" },
            { id: 300, planType: "GIFTING", amount: "₦308.0", size: "1.0 GB", validity: "1 month" },
            { id: 301, planType: "GIFTING", amount: "₦88.0", size: "100.0 MB", validity: "1 month" },
            { id: 302, planType: "GIFTING", amount: "₦105.6", size: "450.0 MB", validity: "1 month" },
            { id: 303, planType: "GIFTING", amount: "₦176.0", size: "200.0 MB", validity: "1 month" },
            { id: 313, planType: "AWOOF GIFTING", amount: "₦70.0", size: "100.0 MB", validity: "1 month" },
            { id: 314, planType: "AWOOF GIFTING", amount: "₦120.0", size: "300.0 MB", validity: "1 month" },
            { id: 315, planType: "AWOOF GIFTING", amount: "₦520.0", size: "3.0 GB", validity: "1 month" },
            { id: 316, planType: "AWOOF GIFTING", amount: "₦1020.0", size: "4.0 GB", validity: "1 month" },
            { id: 317, planType: "AWOOF GIFTING", amount: "₦2020.0", size: "10.0 GB", validity: "1 month" },
            { id: 318, planType: "AWOOF GIFTING", amount: "₦3020.0", size: "15.0 GB", validity: "1 month" },
            { id: 319, planType: "AWOOF GIFTING", amount: "₦220.0", size: "1.0 GB", validity: "1 month" },
            { id: 320, planType: "AWOOF GIFTING", amount: "₦320.0", size: "2.0 GB", validity: "1 month" }
        ]
    },
    GLO: {
        pk: 2,
        plans: [
            { id: 27, planType: "GIFTING", amount: "₦3240.0", size: "18.0 GB", validity: "1 month" },
            { id: 28, planType: "GIFTING", amount: "₦2430.0", size: "14.0 GB", validity: "1 month" },
            { id: 29, planType: "GIFTING", amount: "₦2025.0", size: "10.8 GB", validity: "1 month" },
            { id: 30, planType: "GIFTING", amount: "₦1620.0", size: "9.2 GB", validity: "1 month" },
            { id: 31, planType: "GIFTING", amount: "₦1215.0", size: "7.5 GB", validity: "1 month" },
            { id: 32, planType: "GIFTING", amount: "₦810.0", size: "3.9 GB", validity: "1 month" },
            { id: 37, planType: "GIFTING", amount: "₦405.0", size: "1.8 GB", validity: "1 month" },
            { id: 73, planType: "GIFTING", amount: "₦4050.0", size: "24.0 GB", validity: "1 month" },
            { id: 74, planType: "GIFTING", amount: "₦12150.0", size: "93.0 GB", validity: "1 month" },
            { id: 75, planType: "GIFTING", amount: "₦6480.0", size: "29.5 GB", validity: "1 month" },
            { id: 143, planType: "GIFTING", amount: "₦14580.0", size: "119.0 GB", validity: "1 month" },
            { id: 144, planType: "GIFTING", amount: "₦810.0", size: "3.9 GB", validity: "1 month" },
            { id: 155, planType: "GIFTING", amount: "₦2025.0", size: "10.8 GB", validity: "1 month" },
            { id: 156, planType: "GIFTING", amount: "₦2430.0", size: "14.0 GB", validity: "1 month" },
            { id: 157, planType: "GIFTING", amount: "₦3240.0", size: "18.0 GB", validity: "1 month" },
            { id: 158, planType: "GIFTING", amount: "₦4050.0", size: "24.0 GB", validity: "1 month" },
            { id: 159, planType: "GIFTING", amount: "₦6480.0", size: "29.5 GB", validity: "1 month" }
        ]
    },
    ETISALAT: {
        pk: 3,
        plans: [
            { id: 27, planType: "GIFTING", amount: "₦3240.0", size: "18.0 GB", validity: "1 month" },
            { id: 28, planType: "GIFTING", amount: "₦2430.0", size: "14.0 GB", validity: "1 month" },
            { id: 29, planType: "GIFTING", amount: "₦2025.0", size: "10.8 GB", validity: "1 month" },
            { id: 30, planType: "GIFTING", amount: "₦1620.0", size: "9.2 GB", validity: "1 month" }
        ]
    }
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

    if (network && dataPlans[network]) {
        const types = [...new Set(dataPlans[network].plans.map(plan => plan.planType))];
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

    if (network && type && dataPlans[network]) {
        const filteredPlans = dataPlans[network].plans.filter(plan => plan.planType === type);
        filteredPlans.forEach(plan => {
            const option = document.createElement('option');
            option.value = plan.id;
            option.textContent = `${plan.size} - ${plan.amount} (${plan.validity})`;
            dataPlanSelect.appendChild(option);
        });
    }
});


// // Handle network selection
// document.getElementById('network').addEventListener('change', function() {
//     const network = this.value;
//     const dataTypeSelect = document.getElementById('data-type');
//     const dataPlanSelect = document.getElementById('data-plan');
//     const costInput = document.getElementById('cost');

//     dataTypeSelect.innerHTML = '<option value="">Select Data Type</option>';
//     dataPlanSelect.innerHTML = '<option value="">Select Data Plan</option>';
//     costInput.value = '';

//     if (network) {
//         const types = [...new Set(dataPlans[network].map(plan => plan.planType))];
//         types.forEach(type => {
//             const option = document.createElement('option');
//             option.value = type;
//             option.textContent = type;
//             dataTypeSelect.appendChild(option);
//         });
//     }
// });



// // Handle data type selection
// document.getElementById('data-type').addEventListener('change', function() {
//     const network = document.getElementById('network').value;
//     const type = this.value;
//     const dataPlanSelect = document.getElementById('data-plan');
//     const costInput = document.getElementById('cost');

//     dataPlanSelect.innerHTML = '<option value="">Select Data Plan</option>';
//     costInput.value = '';

//     if (network && type) {
//         const filteredPlans = dataPlans[network].filter(plan => plan.planType === type);
//         filteredPlans.forEach(plan => {
//             const option = document.createElement('option');
//             option.value = plan.id;
//             option.textContent = `${plan.size} - ${plan.amount} (${plan.validity})`;
//             dataPlanSelect.appendChild(option);
//         });
//     }
// });





// Handle data plan selection
document.getElementById('data-plan').addEventListener('change', function() {
    const network = document.getElementById('network').value;
    const type = document.getElementById('data-type').value;
    const planId = this.value;

    if (network && type && planId) {
        const selectedPlan = dataPlans[network].plans.find(plan => plan.id == planId);
        if (selectedPlan) {
            document.getElementById('cost').value = selectedPlan.amount;
        }
    }
});



// Handle form submission
document.getElementById('data-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userId = new URLSearchParams(window.location.search).get('user_id');
    const pin = document.getElementById('pin').value;
    const network = document.getElementById('network').value;
    const plan = document.getElementById('data-plan').value;
    const cost = parseFloat(document.getElementById('cost').value.replace('₦', '').replace(',', ''));

    if (userId && pin && network && plan && cost) {
        const networkId = dataPlans[network].pk;  // Get the network primary key (ID)
        
        fetch('http://127.0.0.1:5000/api/validate-pin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: userId, pin: pin, network_id: networkId, plan: plan, cost: cost }),  // Send network_id instead of network
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


// // Handle form submission
// document.getElementById('data-form').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const userId = new URLSearchParams(window.location.search).get('user_id');
//     const pin = document.getElementById('pin').value;
//     const network = document.getElementById('network').value;
//     const plan = document.getElementById('data-plan').value;
//     const cost = parseFloat(document.getElementById('cost').value.replace('₦', '').replace(',', ''));

//     if (userId && pin && network && plan && cost) {
//         fetch('http://127.0.0.1:5000/api/validate-pin', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ user_id: userId, pin: pin, network: network, plan: plan, cost: cost }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.valid) {
//                 alert(data.message);  // Display success or failure message
//             } else {
//                 alert(data.message);
//             }
//         })
//         .catch(error => console.error('Error validating PIN:', error));
//     } else {
//         alert('Please fill all fields correctly.');
//     }
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
let userId = urlParams.get('user_id');  

if (userId) {
    fetchUserData(userId); 
}
