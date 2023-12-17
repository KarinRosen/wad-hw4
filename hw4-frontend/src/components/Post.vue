<template>
  <div class="container">
    <div class="column column1"> </div>
    <div class="column column2"> 
      <router-link :to="'/post/' + post.id" class="post-link">
        <div class="post">
          <div class="post-header">
            <div class="post-date">{{ formatDate(post.date) }}</div>
          </div>
          <p> {{post.content}} </p>
          <div class="post-footer">
          </div>
        </div>
      </router-link>
    </div>
    <div class="column column3"></div>
  </div>
</template>


<script>
export default {
  props: {
    post: Object, // Lisage komponendile post prop, et saaksite sellele ligi
  },

methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'Europe/Tallinn', 
        hour12: false,
      };
      return new Date(date).toLocaleDateString('en-EE', options);
  
  }}}

</script>


<style>
/**/
.container {
    display: flex;
    justify-content: space-between;
}

.column {
    flex: 1;
   
}

.column2 {
    flex-grow: 2.5; /*middle column is wider*/
}
.column1, .column3 {
    margin: 20px;
}


@media (max-width: 600px) {
    .column1,
    .column3 {
        display: none;

    }
}
/* Post */
.post {
    margin: 20px; 
    padding: 10px;
    background-color: #d1e1eb;
    border-radius: 10px;
}
img + p {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.post > .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.post p {
  display: block;
  text-align: left;
  margin-left: 10px;
  margin-top: 30px;
}
.post-link {
  text-decoration: none;
  color: inherit;
  display: block; 
}


.post-link:hover .post {
  background-color: #a7c9d9;
}
.post-footer {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}

</style>