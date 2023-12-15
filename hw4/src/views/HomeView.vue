<template>
  <div class="home">
    <button  @click="Logout" class="button">Logout</button>
    <Post v-for="post in posts" :key="post.id" :post="post" />
  <button @click="Addpost" class="button">Add post</button>
  <button @click="Delete" class="button">Delete all</button>
  </div>
</template>

<script>
// @ is an alias to /src
import auth from "../auth";
import Post from "@/components/Post";

export default {
  components: {
    Post
  },
  name: "HomeView",
  data() {
    return {
      posts: [], // Lisa see, et hoida postitusi komponendi andmestruktuuris
    };
  },
  async created() {
    try {
      const response = await fetch("http://localhost:3000/posts", {
        credentials: "include",
      });

      if (response.ok) {
        this.posts = await response.json();
      } else {
        console.error("Failed to fetch posts");
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
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
  async Delete() {
    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "DELETE",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Kui soovid, võid siin kutsuda ka meetodi, et uuesti postitusi laadida
        this.fetchPosts(); // You need to define the fetchPosts method to update posts after deletion
      } else {
        console.error("Failed to delete posts");
      }
    } catch (error) {
      console.error("Error deleting posts:", error);
    }
  },
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
    Addpost() {
      this.$router.push("/addpost");
        //location.assign("/");
      }
  }, 
  mounted() {
    this.fetchPosts();
    fetch('http://localhost:3000/posts', { credentials: "include" })
        .then((response) => response.json())
        .then(data => this.posts = data.posts)
        .catch(err => console.log(err.message))
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