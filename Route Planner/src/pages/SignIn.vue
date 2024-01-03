<template>
  <div class="sign-in-container">
    <h2>Sign In</h2>
    <div class="SignInPage">
      <authenticator />
    </div>
      <p>
      Don't have an account?
      <router-link to="/register">Register</router-link>
    </p>
  </div>
</template>

<script>
import {Authenticator} from "@aws-amplify/ui-react"

export default {
  name: 'SignInPage',
  components:{
    Authenticator
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async onSubmit() {
      console.log('Submitted', this.email, this.password);
      // Add your authentication logic here.
      // For demonstration, let's assume the authentication is successful.
      // Redirect to IndexPage after successful sign-in
      this.$router.push({ path: 'IndexPage' });
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
