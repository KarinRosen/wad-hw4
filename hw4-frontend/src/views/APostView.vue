<template>
  <div class="container">
    <div class="column column1"></div>
    <div class="column column2">
      <div class="apost">
        <h2>A Post</h2>
        <label for="body">Body:</label>
        <input type="text" id="textbox" v-model="userInput" />
        <br />
        <br />
        <div>
          <button @click="Update" class="button">Update</button>
          <button @click="Delete" class="button">Delete</button>
        </div>
      </div>
    </div>
    <div class="column column3"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: "",
    };
  },
  mounted() {
    this.fetchPost(); // Load post data when the component is mounted
  },
  methods: {
    async fetchPost() {
      try {
        const postId = this.$route.params.id;
        const response = await fetch(`http://localhost:3000/posts/${postId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          this.userInput = data.post.content;
        } else {
          console.error("Failed to fetch post");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    },
    async Update() {
      try {
        const postId = this.$route.params.id;
        const response = await fetch(`http://localhost:3000/posts/${postId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            content: this.userInput,
            
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Post updated:", data.post);
          this.$router.push("/");
        } else {
          console.error("Failed to update post");
        }
      } catch (error) {
        console.error("Error updating post:", error);
      }
    },
    async Delete() {
      try {
        const postId = this.$route.params.id;
        const response = await fetch(`http://localhost:3000/posts/${postId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Post deleted:", data.message);
          this.$router.push("/");
        } else {
          console.error("Failed to delete post");
        }
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    },
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
  flex-grow: 2.5; /*middle column is wider*/
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

.apost {
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
