<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <Post v-for="post in posts" :key="post.id" :post="post" />
  
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue';

export default {
  name: 'HomeView',
  components: 
    {Post},

  computed: {
    posts() {
      // Assuming you have a posts data property in your component
      return this.$store.getters.posts;
      
    },
  },
  
};
</script>

<style>

</style>