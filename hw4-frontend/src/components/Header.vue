<template>
    <header>
        <h1>Hello!</h1>
      <nav>
        <router-link to="/" class="nav-link" :class="{ 'router-link-active': $route.path === '/' }">Home</router-link> 
        <router-link to="/contacts" class="nav-link" :class="{ 'router-link-active': $route.path === '/contacts' }">Contacts</router-link>
      </nav>
    </header>
  </template>


<style scoped>
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
  margin:  10px;
  color: #fff;
  text-decoration: none;
}

router-link:hover {
  text-decoration: none;
}


</style>