<template>
    <header>
        <h1>Your Website Name</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">Sign up</router-link>
      </nav>
    </header>
  </template>

  
<style>
header {
  background-color: #333;
  padding: 10px;
  text-align: center;
}

h1 {
  color: #fff;
}

nav {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

router-link {
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>