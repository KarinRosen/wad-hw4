<template>
  <div class="container">
    <div class="column column1"></div>
    <div class="column column2">
      <div class="addpost">
        <h2>Add Post</h2>
        <label for="textbox">Body:</label>
        <input type="text" id="textbox" v-model="userInput" />
        <br />
        <br />
        <center>
          <button @click="Add" class="button">Add</button>
        </center>
      </div>
    </div>
    <div class="column column3"></div>
  </div>
</template>

<script>
export default {
  name: "AddPostView",
  data() {
    return {
      userInput: "",
      posts: [],
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch("http://localhost:3000/posts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          this.posts = data.posts;
          console.log("Posts fetched successfully!");
          
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    async Add() {
      try {
        const response = await fetch("http://localhost:3000/posts/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            content: this.userInput,
          }),
        });

        if (response.ok) {
          console.log("Post added successfully!");
          this.$router.push("/");
          // Pärast postituse lisamist uuendame postituste nimekirja
          this.fetchPosts();
        } else {
          console.error("Failed to add post");
        }
      } catch (error) {
        console.error("Error adding post:", error);
      }
    },
  },
  mounted() {
    // Kaasake meetod fetchPosts komponendi loomisel (mounted sündmus)
    this.fetchPosts();
  },
};
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
  flex-grow: 2.5;
  align-items: center;
  justify-content: center;
}

.column1,
.column3 {
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

.addpost {
  font-family: Georgia, 'Times New Roman', Times, serif;
  background-color: #d1e1eb;
  color: black;
  font-size: larger;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}

.button {
  background-color: indigo;
  border: none;
  color: aliceblue;
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
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
