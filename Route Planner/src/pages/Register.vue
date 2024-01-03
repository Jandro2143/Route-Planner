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
      <p>
        Already have an account?
        <router-link to="/signin">Sign In</router-link>
      </p>
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
    async onRegister() {
      console.log('Registering', this.email, this.password, this.confirmPassword);

      // Basic validation for demonstration purposes
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      // TODO: Replace with actual registration logic
      // Example: send a request to your backend or AWS Cognito

      // Assuming registration is successful, redirect to the sign-in page
      this.$router.push({ path: '/signin' });
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
