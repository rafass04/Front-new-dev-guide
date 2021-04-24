<template>
<div class="card" style="width: 18rem;">
  <img class="card-img-top" :src="article.img" :alt="article.title" v-if="article.img">
  <div class="card-body">
    <h5 class="card-title">{{article.title}}</h5>
    <p class="card-text" v-if="subtitle">{{article.subtitle}}</p>
    <router-link class="btn btn-outline-primary" :to="'/article/' + article._id">
      Ler Artigo
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>
