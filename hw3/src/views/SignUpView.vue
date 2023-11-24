<template>
  <div class="container">
    <div class="column column1">
      </div>
  <div class="column column2">
    <div class="signup">
      <h2>Create your account</h2>
      <form @submit.prevent="validateForm">
        <label for="email">Email:    </label>
        <input v-model="email" type="email" name="email" required placeholder="Email" class="email">
        <br>
        <br>
        <label for="password">Password: </label>
        <input v-model="password" type="password" name="password" required placeholder="Password">
        <br>
        <span v-if="passwordError" class="error">{{ passwordError }}</span>
        <br>
        <br>
        <br>
        <center>
          <button type="submit" class="button">Sign up</button>
        </center>
      </form>
    </div>
  </div>
    <div class="column column3"></div>
  </div>
</template>
<script lang="js">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
      return {
          email: '',
          password: '',
          passwordError: '',
      };
  },
  methods: {
      validateForm() {
          if (this.email === '' || this.password ==='') {
              alert('Please fill in both fields');
              return;
          }

          if (this.password.length < 8 || this.password.length >= 15) {
              this.passwordError = 'Password must be between 8 and 15 characters';
              return;
          }

          if (!/[A-Z]/.test(this.password)) {
              this.passwordError = 'Password must include at least 1 uppercase alphabet character.';
              return;
          }

          if ((this.password.match(/[a-z]/g) || []).length < 2) {
              this.passwordError = 'Password must include at least 2 lowercase alphabet characters.';
              return;
          }

          if (!/\d/.test(this.password)) {
              this.passwordError = 'Password must include at least 1 number.';
              return;
          }

          if (!/^[A-Z]/.test(this.password)) {
              this.passwordError = 'Password must start with an uppercase alphabet character.';
              return;
          }
          
          if (!/_/.test(this.password)) {
              this.passwordError = 'Password must include the character "_"';
              return;
          }

          this.passwordError = '';

          this.$router.push('/');

      },
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
.column {
  flex: 1;
  text-align: center;
}

.column2 {
  flex-grow: 2.5; /*middle column is wider*/
  align-items: center;
  justify-content: center;
  
}

.column1, .column3 {
  margin: 20px;
}

@media (max-width: 600px) {
  .column1,
  .column3 {
      display: none;          

  }
}

input {
  border-radius: 8px;
  border-color: indigo;
  font-style: italic;
  
}
.email {
  margin-left: 30px;
}


.signup {

  font-family:Georgia, 'Times New Roman', Times, serif;
  background-color:#d1e1eb;
  color:black;
  font-size: larger;
  margin: 20px; 
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}



.button {
  background-color: indigo;
  border: none;
  color:aliceblue;
  padding: 15px 32px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 4px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; 
  transition-duration: 0.4s;
  outline: none;
}

.button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.error {
  color: crimson;
}

</style>