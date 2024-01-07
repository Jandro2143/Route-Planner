<template>
    <div class="register-container">
      <h2>Register</h2>
      <form @submit.prevent="onRegister">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
  
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
  
        <div class="form-group">
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required>
        </div>
  
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterPage',
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      onRegister() {
        // Registration logic goes here
        console.log('Registering', this.email, this.password, this.confirmPassword);
        // Perform validation, send data to server, handle the response, etc.
  
  
      },
    },
  };
  </script>
  
  <style>
    .register-container {
      max-width: 300px;
      margin: auto;
      padding: 20px;
      text-align: center;
    }
  
    .form-group {
      margin-bottom: 10px;
    }
  
    .form-group label {
      display: block;
    }
  
    .form-group input {
      width: 100%;
      padding: 8px;
      margin-top: 4px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  </style>