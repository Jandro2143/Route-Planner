<template>
  <div class="sign-in-container">
    <h2>Sign In</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>

      <button type="submit">Sign In</button>
    </form>
    <p>
      Don't have an account?
      <router-link to="/register">Register</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SignInPage',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      // Here you would typically send the data to your server for authentication
      console.log('Submitted', this.email, this.password);
      // You might want to redirect the user or show a message after successful authentication
    },
  },
};
</script>

<style>
.sign-in-container {
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
