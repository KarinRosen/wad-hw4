<template>
    <div class="container">
      <div class="column column1">
        </div>
    <div class="column column2">
      <div class="addpost">
        <h2>A post</h2>
          <label for="body">Body:    </label>
          <input v-model="body" type="bodu" name="bodu" required placeholder="body" class="body">
          <br>
          <br>
          <center>
            <button @click="Update"  class="button">Update</button>
            <button @click="Delete"  class="button">Delete</button>
            </center>
      </div>
    </div>
      <div class="column column3"></div>
    </div>
  </template>


<script>


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
  

  </style>