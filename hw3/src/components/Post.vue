<template>
    <div class="post">
      <div class="post-header">
        <img class="profile-picture" :src="post.profilePic" alt="Profile Picture" />
        <div class="post-date">{{ formatDate(post.createTime) }}</div>
      </div>
      <div class="post-content">
        <p>{{ post.body }}</p>
        <img v-if="post.img" :src="post.img" alt="Post Image" />
      </div>
      <div class="post-footer">
        <img class="likeButton" @click="likePost" :src="likePic" alt="Like Button" />
        {{ post.likes }} Likes
      </div>
    </div>
  </template>

<script>
export default {
  props: {
    post: Object, // Assuming you pass the post object as a prop
  },
  methods: {
    likePost() {
      // Call Vuex action to like the post
      this.$store.dispatch('likePost', this.post.id);
    },
    formatDate(date) {
      // Implement your date formatting logic
    },
  },
  computed: {
    likePic() {
      // Assuming you have a path to the like image
      return '/path/to/like-image.png';
    },
  },
};

</script>


<style>

</style>