<template>
  <div class="container">
    <div class="column column1"> </div>
  <div class="column column2"> 
    <div class="post">
      <div class="post-header">
      </div>
      <p> {{post.content}} </p>
      <div class="post-footer">
      </div>
    </div>
  </div>
  <div class="column column3"></div>
</div>
  </template>

<script>
export default {
  props: {
    post: Object, // Lisage komponendile post prop, et saaksite sellele ligi
  },
};

</script>


<style>
/**/
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

.post img {
    max-width: 100%; 
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
.profile-picture {
    width: 30px; 
    height: 30px; 
}
.post-content p {
    display: block;
    text-align: left;
    margin-left: 10px;
    
}
.like-icon {
    display: block;
    margin-left: 10px;
}
.post-footer {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}

</style>