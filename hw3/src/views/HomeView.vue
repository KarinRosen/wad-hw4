<template>
  <div class="home">

    <!-- Iterate over the posts and render post component -->
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
     // Computed property that retrieves the posts from the Vuex store
    posts() {
      // Assuming you have a posts data property in your component
      return this.$store.getters.posts;
      
    },
  },
  
};
</script>

<style>

</style>