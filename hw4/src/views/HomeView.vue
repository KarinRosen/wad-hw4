<template>
  <div class="home">
    <!-- Iterate over the posts and render post component -->
    <Post v-for="post in posts" :key="post.id" :post="post" />
    <button @click="resetLikes" class="button">Reset Likes</button>
  </div>
</template>

<script>

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

<style scoped>
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
  margin-bottom: 24px;
}

.button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>