<template>
  <div class="home">

    <!-- Iterate over the posts and render post component -->
    <Post v-for="post in posts" :key="post.id" :post="post" />
    <button @click="resetLikes" class="button">Reset Likes</button>
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
    
      return this.$store.getters.posts;
      
    },
  },
  methods: { // resets all likes
    resetLikes: function(){
      this.$store.dispatch("resetLikesAct")
    }
  }
  
};
</script>

<style>
button {
    margin: 10px;
    padding: 10px;
    background-color: #e92c51; 
    color: #fff;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #862a2f; 
  }
</style>