<template>
    <div class="settings-container">
      <h2>Account Settings</h2>
  
      <section class="account-info">
        <h3>Account Information</h3>
        <p><strong>Email:</strong> user@example.com</p>
        <!-- Display other account information here -->
        <button @click="editAccount">Edit Account</button>
      </section>
  
      <section class="membership-plans">
        <h3>Membership Plans</h3>
        <!-- Display available membership plans here -->
        <div class="plan">
          <div class="plan-details">
            <p><strong>Plan Name:</strong> Basic</p>
            <p><strong>Description:</strong> Basic membership plan with limited features.</p>
          </div>
          <button @click="selectPlan('Basic')">Select Plan</button>
        </div>
        <!-- Repeat for other plans -->
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SettingsPage',
    methods: {
      editAccount() {
        // Logic to edit account details
        console.log('Edit account');
      },
      selectPlan(planName) {
        // Logic to select a membership plan
        console.log(`Select plan: ${planName}`);
      },
    },
  };
  </script>
  
  <style>
  .settings-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }
  
  section {
    margin-bottom: 20px;
  }
  
  .plan {
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .plan-details {
    margin-bottom: 10px;
  }
  </style>