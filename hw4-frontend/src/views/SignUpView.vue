<template>
  <div class="container">
    <div class="column column1"></div>
    <div class="column column2">
      <div class="signup">
        <h2>Create your account</h2>
        <div>
          <label for="email">Email:</label>
          <input v-model="email" type="email" name="email" required placeholder="Email" class="email">
        </div>
        <div>
          <label for="password">Password:</label>
          <input v-model="password" type="password" name="password" required placeholder="Password">
        </div>
        <span v-if="passwordError" class="error">{{ passwordError }}</span>
        <div>
          <button @click="SignUp" class="button">SignUp</button>
        </div>
      </div>
    </div>
    <div class="column column3"></div>
  </div>
</template>


<script>
export default {
name: "SignUp", 

data: function() {
    return {
   email: '',
   password: '',
  }
  },
  methods: {


SignUp() {
      var data = {
        email: this.email,
        password: this.password
      };

      if (!this.email || !this.password) {
        this.passwordError = "Please enter both email and password.";
        return;
      }
      
      fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      this.$router.push("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  }, 
  }
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
  margin: 10px;
  
}

.signup {
  display: flex;
  flex-direction: column;
  font-family:Georgia, 'Times New Roman', Times, serif;
  background-color:#d1e1eb;
  color:black;
  font-size: larger;
  margin: 20px; 
  padding: 10px;
  border-radius: 10px;
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
  margin-top: 30px;
  width: fit-content;
  margin-bottom: 20px;
}

.button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.error {
  color: crimson;
}

</style>