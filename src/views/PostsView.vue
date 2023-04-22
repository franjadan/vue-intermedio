<template>
  <div class="about">
    <h1>Posts publicados</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  import postService from '../services/postService.js';

  export default {
    name: 'Posts',
    created(){
      postService.get()
        .then(resultado => this.posts = resultado.data)
    },
    data(){
      return {
        posts: []
      }
    }
  }
</script>
